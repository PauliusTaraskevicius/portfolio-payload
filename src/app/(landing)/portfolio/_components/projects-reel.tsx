"use client";

import { TQueryValidator } from "@/lib/query-validator";
import { Project } from "@/payload-types";
import { trpc } from "@/trpc/client";
import Link from "next/link";
import ProjectListing from "./project-listing";

interface ProjectsReelProps {
  name: string;
  slug?: string;
  href?: string;
  query: TQueryValidator;
}

const FALLBACK_LIMIT = 4;

const ProjectsReel = (props: ProjectsReelProps) => {
  const { name, slug, href, query } = props;

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


  let map: (Project | null)[] = [];
  if (projects && projects.length) {
    map = projects;
  } else if (isLoading) {
    map = new Array<null>(query.limit ?? FALLBACK_LIMIT).fill(null);
  }

  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {name ? (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {name}
            </h1>
          ) : null}
          {slug ? (
            <p className="mt-2 text-sm text-muted-foreground">{slug}</p>
          ) : null}
        </div>

        {/* {href ? (
          <Link
            href={href}
            className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block"
          >
            Shop the collection <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null} */}
      </div>

      <div className="relative">
        <div className="mt-6 flex items-center w-full">
          <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
            {map.map((project, i) => (
              <ProjectListing
                key={`project-${i}`}
                project={project}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsReel;
