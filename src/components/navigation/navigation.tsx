"use client";

import { useState } from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

import { useMedia } from "react-use";
import { FacebookIcon, Share2 } from "lucide-react";
import { Menu } from "lucide-react";
import { Home } from "lucide-react";
import { User } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { Mail } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { FileText } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import { ContentWrapper } from "../content-wrapper";
import { NavigationItem } from "./navigation-item";
import { BuyMeCofeeWidget } from "../buy-me-coffee-widget";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    label: "About",
    href: "/about",
    icon: <User />,
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: <BriefcaseBusiness />,
  },
  {
    label: "Resume",
    href: "/resume",
    icon: <FileText />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();

  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="w-full p-3 backdrop-blur-lg transition-all">
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              className="font-normal border-none"
            >
              <Menu className="w-8 h-8" />
            </Button>
            <Link href="/">
              <Button
                className="bg-transparent hover:bg-transparent border border-black"
                size="logo"
              >
                <div className="flex items-center bg-primary w-full h-full px-2 rounded-l-md">
                  <Share2 className="h-5 w-5 mr-2 text-white" />
                </div>

                <p className="font-bold text-sm text-black px-2">PaulyDev</p>
              </Button>
            </Link>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "default" : "outline"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.icon}
                <p className="pl-2">{route.label}</p>
              </Button>
            ))}
          </nav>
          <Separator className="my-2" />
          <div className="flex flex-col space-y-2">
            <a
              href="https://linkedin.com/in/paulius-taraškevičius-916b83234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full justify-start border-none hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="w-6 h-6" />
                <p className="pl-2 ">/paulius-taraskevicius</p>
              </Button>
            </a>
            <a
              href="https://www.facebook.com/paulius.taraskevicius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full justify-start border-none hover:bg-primary hover:text-primary-foreground"
              >
                <Facebook className="w-6 h-6" />
                <p className="pl-2">/paulius.taraskevicius</p>
              </Button>
            </a>
            <a
              href="https://github.com/PauliusTaraskevicius"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full justify-start border-none hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="w-6 h-6" />
                <p className="pl-2">/pauliustaraskevicius</p>
              </Button>
            </a>
            <div className="absolute bottom-0 w-full">
              <BuyMeCofeeWidget />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex sticky inset-x-0 top-0 w-full h-[6rem] backdrop-blur-lg transition-all z-[99999]">
      <ContentWrapper className="flex items-center space-x-4">
        <div className="flex items-center">
          <Link href="/">
            <Button
              className="bg-transparent hover:bg-transparent border border-black"
              size="logo"
            >
              <div className="flex items-center bg-primary w-full h-full px-2 rounded-l-md">
                <Share2 className="h-5 w-5 mr-2 text-white" />
              </div>

              <p className="font-bold text-sm text-black px-2">PaulyDev</p>
            </Button>
          </Link>
        </div>

        <div className="flex w-full">
          {routes.map((route) => (
            <NavigationItem
              key={route.href}
              label={route.label}
              href={route.href}
              isActive={pathname === route.href}
            />
          ))}
          <div className="flex items-center justify-end w-full space-x-4 px-4">
            <a href="#">
              <Image
                src="/linkedin.png"
                height={35}
                width={35}
                alt="Linkedin"
              />
            </a>
            <a href="#">
              <Image
                src="/facebook.png"
                height={35}
                width={35}
                alt="Facebook"
              />
            </a>
            <a href="#">
              <Image src="/github.png" height={35} width={35} alt="Github" />
            </a>
          </div>
        </div>
      </ContentWrapper>
    </nav>
  );
};
