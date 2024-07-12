"use client";

import { TQueryValidator } from "@/lib/query-validator";
import { Project } from "@/payload-types";
import { trpc } from "@/trpc/client";
import ProjectListing from "./project-listing";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel";

import { motion, useTransform, useScroll } from "framer-motion";

import { useRef } from "react";

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
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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
      <section ref={targetRef} className="relative h-[300vh] bg-gray-300">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-full">
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
      {/* <div
        ref={targetRef}
        className="h-full w-full flex items-center justify-center overflow-hidden rounded-lg  py-4"
      >

        <Carousel
          className="w-[50%]"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {map.map((project, i) => (
              <CarouselItem key={`project-${i}`}>
                <ProjectListing
                  key={`project-${i}`}
                  project={project}
                  index={i}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}
    </>
  );
};

export default ProjectsReel;
