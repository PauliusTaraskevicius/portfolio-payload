"use client";

import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Project } from "@/payload-types";

import { Skeleton } from "@/components/ui/skeleton";

interface ProjectListingProps {
  project: Project | null;
  index: number;
}

const ProjectListing = ({ project, index }: ProjectListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);

  if (!project || !isVisible) return <ProjectPlaceholder />;

  const validUrls = project.image
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean);

  if (isVisible && project) {
    return (
      <Link
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
        // href={`/portfolio/${project.id}`}
        href="#"
      >
        <div className="flex flex-col w-full">
          {validUrls.map((url, i) => (
            <div key={i} className="relative h-full w-full">
              <Image
                height={300}
                width={300}
                loading="eager"
                className="h-full w-full object-cover object-center"
                src={url!}
                alt="Project image"
              />
            </div>
          ))}

          <h3 className="mt-4 font-medium text-sm text-gray-700">
            {project.name}
          </h3>
          <p className="mt-1 font-medium text-sm text-gray-900">
            {project.brief}
          </p>
        </div>
      </Link>
    );
  }
};

const ProjectPlaceholder = () => {
  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
};

export default ProjectListing;
