"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
      // <section
      //   style={{ perspective: "500px" }}
      //   className="h-[100vh] flex justify-center items-center relative snap-center "
      // >
      //   <div
      //     className="w-[300px] h-[400px] relative max-h-[90vh] m-[20px] overflow-hidden "
      //   >
      //     {validUrls.map((url, i) => (
      //       <a
      //         key={i}
      //         className={cn("invisible cursor-pointer", {
      //           "visible animate-in fade-in-5": isVisible,
      //         })}
      //         // href={`/portfolio/${project.id}`}
      //         href={project.url}
      //         target="_blank"
      //         rel="noopener noreferrer"
      //       >
      //         <Image
      //           height={1200}
      //           width={1200}
      //           quality={80}
      //           loading="eager"
      //           className="h-full object-cover bg-center transition-transform duration-300 group-hover:scale-110"
      //           src={url!}
      //           alt="Project image"
      //         />
      //       </a>
      //     ))}
      //   </div>
      // </section>

      <div className="group relative h-[450px] overflow-hidden snap-center ">
        {validUrls.map((url, i) => (
          <a
            key={i}
            className={cn("invisible", {
              "visible animate-in fade-in-5": isVisible,
            })}
            // href={`/portfolio/${project.id}`}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              height={1200}
              width={1200}
              quality={80}
              loading="eager"
              className="h-full object-cover bg-center transition-transform duration-300 group-hover:scale-110"
              src={url!}
              alt="Project image"
            />
          </a>
        ))}

        <div className="absolute inset-0 z-10 grid place-content-center cursor-pointer">
          <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
            {project.name}
          </p>
        </div>
      </div>
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
