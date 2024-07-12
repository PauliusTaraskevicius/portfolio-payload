"use client";

import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/payload-types";
import { Skeleton } from "@/components/ui/skeleton";

import { ContentWrapper } from "@/components/content-wrapper";

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
      <div className="w-full">
        {" "}
        {validUrls.map((url, i) => (
          <a
            key={i}
            className={cn("invisible  cursor-pointer", {
              "visible animate-in fade-in-5": isVisible,
            })}
            // href={`/portfolio/${project.id}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={500}
              width={500}
              quality={80}
              loading="eager"
              className="object-cover"
              src={url!}
              alt="Project image"
            />
          </a>
        ))}
      </div>

      // <a
      //   className={cn("invisible h-full w-full cursor-pointer group/main", {
      //     "visible animate-in fade-in-5": isVisible,
      //   })}
      //   // href={`/portfolio/${project.id}`}
      //   href={project.url}
      //   target="_blank"
      //   rel="noopener noreferrer"
      // >
      //   <h3 className="font-semibold text-5xl text-center">{project.name}</h3>
      //   <div className="flex flex-col w-full">
      //     {validUrls.map((url, i) => (
      //       <div key={i} className="relative h-full w-full">
      //         <Image
      //           height={500}
      //           width={500}
      //           quality={80}
      //           loading="eager"
      //           className="h-full w-full object-cover object-center"
      //           src={url!}
      //           alt="Project image"
      //         />
      //       </div>
      //     ))}

      //     <p className="mt-1 font-medium text-sm text-gray-900">
      //       {project.brief}
      //     </p>
      //   </div>
      // </a>
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
