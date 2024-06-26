import { ContentWrapper } from "@/components/content-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <ContentWrapper>
      <div className="flex pb-24 pt-10 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-52 lg:pb-52">
        <div className="relative flex flex-col w-full h-full space-y-96 px-6 sm:w-3/4 ">
          <div className="flex flex-col space-y-12">
            <h1 className="text-4xl font-normal md:text-5xl lg:leading-normal uppercase">
              About me
            </h1>
            <p className="text-lg">
              Hi! I&apos;m Paulius and I&apos;m a self-taught frontend developer
              from Lithuania.I love creating helpful tools and apps for everyone
              to enjoy.
            </p>
            <span className="italic text-lg text-muted-foreground">
              Creating web applications as my hobby and full time job.I create
              custom websites, complex systems to help businesses do better
              online.Worry not, I will make the process as easy and quick as
              possible. Currently, I&apos;m learning about design principles and
              software architecture.
            </span>
            <div className="animate-pulse cursor-pointer">
              <a href="#skills">
                <Image
                  src="/mouse1.png"
                  width={150}
                  height={150}
                  className="absolute -left-6 object-cover animate-bounce"
                  alt="mouse"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          <div
            id="skills"
            className="flex items-center w-full lg:w-2/3 py-24 lg:py-96"
          >
            <div className="flex flex-col space-y-12">
              <h2 className="text-4xl font-normal md:text-5xl lg:leading-normal uppercase">
                Skills
              </h2>
              <div className="flex flex-row flex-wrap gap-2">
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  Javascript
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  Typescript
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  HTML
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  CSS
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  Tailwind
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  React
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  Next.js
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  Python
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  Django
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  Webflow
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="hover:bg-white hover:text-primary"
                >
                  Figma
                </Button>
              </div>
              <div className="animate-pulse cursor-pointer">
                <a href="#work">
                  <Image
                    src="/mouse1.png"
                    width={150}
                    height={150}
                    className="absolute -left-6 object-cover animate-bounce"
                    alt="mouse"
                  />
                </a>
              </div>
            </div>
          </div>

          <div
            id="work"
            className="flex flex-col justify-center items-center space-y-4 py-24 lg:py-96"
          >
            <Link href="/portfolio">
              <Button
                variant="default"
                className="w-[300px] h-[55px] hover:bg-white hover:text-primary text-3xl"
              >
                View my Work
              </Button>
            </Link>

            <Link href="/resume">
              <Button
                variant="default"
                className="w-[300px] h-[55px] hover:bg-white hover:text-primary text-3xl"
              >
                View my Resume
              </Button>
            </Link>
            <p className="text-3xl">OR</p>

            <Link href="/contact">
              {" "}
              <Button variant="link" className="w-[300px] h-[55px] text-3xl">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block ">ANIMATION</div>
      </div>
    </ContentWrapper>
  );
};

export default AboutPage;
