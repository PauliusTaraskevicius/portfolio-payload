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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

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
      {/* <section ref={targetRef} className="w-full">
        {map.map((project, i) => (
          <motion.div
            key={`project-${i}`}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ProjectListing project={project} index={i} />
          </motion.div>
        ))}
      </section> */}

      <section ref={targetRef} className="relative h-[300vh] ">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {map.map((project, i) => (
              <motion.div
                key={`project-${i}`}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ProjectListing project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsReel;
