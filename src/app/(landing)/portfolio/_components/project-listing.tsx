"use client";

import { Project } from "@/payload-types";
import { useEffect, useState } from "react";
// import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

  if (!project || !isVisible) return "None";

  const validUrls = project.image
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean);

  if (isVisible && project) {
    return (
      <Link
        className={cn("invisible h-full w-full cursor-pointer group/main", {
          "visible animate-in fade-in-5": isVisible,
        })}
        href={`/portfolio/${project.id}`}
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
          {/* <p className="mt-1 text-sm text-gray-500">{label}</p> */}
          <p className="mt-1 font-medium text-sm text-gray-900">
            {project.slug} SLUGAS
          </p>
        </div>
      </Link>
    );
  }
};

// const ProductPlaceholder = () => {
//   return (
//     <div className="flex flex-col w-full">
//       <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
//         <Skeleton className="h-full w-full" />
//       </div>
//       <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
//       <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
//       <Skeleton className="mt-2 w-12 h-4 rounded-lg" />
//     </div>
//   );
// };

export default ProjectListing;
