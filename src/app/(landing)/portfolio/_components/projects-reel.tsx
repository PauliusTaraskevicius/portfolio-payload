"use client";

import { TQueryValidator } from "@/lib/query-validator";
import { Project } from "@/payload-types";
import { trpc } from "@/trpc/client";
import ProjectListing from "./project-listing";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface ProjectsReelProps {
  name: string;
  slug?: string;
  href?: string;
  query: TQueryValidator;
}

const FALLBACK_LIMIT = 4;

const ProjectsReel = (props: ProjectsReelProps) => {
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
      <div className="h-full w-full flex items-center justify-center overflow-hidden rounded-lg  py-4">
        <Carousel className="w-[50%]">
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
        </Carousel>
      </div>
    </>
  );
};

export default ProjectsReel;
