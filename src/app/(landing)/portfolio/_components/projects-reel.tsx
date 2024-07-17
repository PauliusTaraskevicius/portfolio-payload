"use client";
import { useRef } from "react";
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

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%",]);
  const x = useTransform(scrollYProgress, [1, 0], ["-100%", "70%"]);

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

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-red-200">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }}>
            <div className="flex gap-4 ">
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
