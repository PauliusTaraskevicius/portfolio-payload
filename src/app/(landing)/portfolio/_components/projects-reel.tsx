"use client";
import { useRef } from "react";
import { useMedia } from "react-use";

import { TQueryValidator } from "@/lib/query-validator";
import { Project } from "@/payload-types";
import { trpc } from "@/trpc/client";

import ProjectListing from "./project-listing";
import { motion, useTransform, useScroll } from "framer-motion";

interface ProjectsReelProps {
  name: string;
  slug?: string;
  href?: string;
  query: TQueryValidator;
}

const FALLBACK_LIMIT = 4;

const ProjectsReel = (props: ProjectsReelProps) => {
  const targetRef = useRef(null);
  const isMobile = useMedia("(max-width: 1024px)", false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%",]);
  const x = useTransform(scrollYProgress, [0, 1], ["55%", "-60%"]);

  const { query } = props;

  const { data: queryResults, isLoading } =
    trpc.getInfiniteProjects.useInfiniteQuery(
      {
        limit: query.limit ?? FALLBACK_LIMIT,
        query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    );

  const projects = queryResults?.pages.flatMap((page) => page.items);

  let map: (Project | any)[] = [];
  if (projects && projects.length) {
    map = projects;
  } else if (isLoading) {
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);
  }

  if (isMobile) {
    return (
      <section className="relative h-full">
        <div className="flex items-center overflow-hidden">
          <div className="flex flex-col space-y-20 lg:space-y-0">
            {map.map((project, i) => (
              <div key={`project-${i}`}>
                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
            
                >
                  <ProjectListing project={project} index={i} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section ref={targetRef} className="h-[300vh]">
        <div className="sticky top-0 flex items-center overflow-hidden">
          <motion.div style={{ x }}>
            <div className="flex">
              {map.map((project, i) => (
                <>
                  <div key={`project-${i}`} className="mx-[30rem]" />

                  <ProjectListing project={project} index={i} />
                </>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsReel;
