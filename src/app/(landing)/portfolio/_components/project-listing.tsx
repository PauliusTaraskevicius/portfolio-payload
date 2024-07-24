"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Project } from "@/payload-types";
import { Loader2 } from "lucide-react";

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

  if (!project || !isVisible)
    return (
      <Loader2
        key={project?.id}
        className="animate-spin h-8 w-8 text-primary"
      />
    );

  const validUrls = project.image
    .map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean);

  if (isVisible && project) {
    return (
      <section className="h-full lg:h-[100vh] flex flex-col md:pt-24 lg:gap-y-10 justify-center items-center">
        <div className="group flex flex-col gap-y-10 relative lg:h-[600px] lg:w-[900px] overflow-hidden p-4 lg:p-0">
          <h1 className="font-semibold text-5xl text-center">{project.name}</h1>
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
                height={800}
                width={800}
                quality={80}
                loading="eager"
                className="h-full w-full object-cover bg-center transition-transform duration-300 lg:group-hover:scale-110 "
                src={url!}
                alt="Project image"
                priority
              />
            </a>
          ))}
        </div>

        <p className="text-center text-primary p-4 lg:p-0">{project.brief}</p>
      </section>
    );
  }
};

export default ProjectListing;
