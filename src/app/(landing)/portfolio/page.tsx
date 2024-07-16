import Image from "next/image";
import ProjectsReel from "./_components/projects-reel";
import { ContentWrapper } from "@/components/content-wrapper";

const PortfolioPage = () => {
  return (
    // <ContentWrapper>
    // lg:pb-52
    <div className="flex flex-col pb-24 pt-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-52 lg:pb-0 justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-6">
        <h1 className="text-6xl font-normal md:text-8xl lg:leading-normal uppercase">
          My work
        </h1>
        <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] animate-pulse cursor-pointer">
          <a href="#skills">
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
    </div>
    // </ContentWrapper>
  );
};

export default PortfolioPage;
