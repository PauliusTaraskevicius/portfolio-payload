import Image from "next/image";
import ProjectsReel from "./_components/projects-reel";
import Link from "next/link";

import { Skeleton } from "@/components/ui/skeleton";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-20 pb-24 pt-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-52 lg:pb-0">
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="text-6xl font-normal md:text-8xl lg:leading-normal uppercase">
          My work
        </h1>
        <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] animate-pulse">
          <a>
            <Image
              fill
              src="/mouse1.png"
              // width={150}
              // height={150}
              className="object-cover animate-bounce"
              alt="mouse"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <ProjectsReel
        query={{ sort: "desc" }}
        href="/portfolio?sort=recent"
        name=""
      />
      <div className="flex flex-col h-screen lg:w-[900px] justify-center items-center gap-y-20 lg:gap-y-36">
        <h1 className="text-6xl text-center uppercase">
          Do you have a project?
        </h1>
        <Link
          href="/contact"
          className="w-48 h-48 md:w-48 md:h-48 bg-primary text-primary-foreground hover:bg-white hover:text-primary transition rounded-full flex items-center justify-center text-4xl text-center font-semibold"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default PortfolioPage;
