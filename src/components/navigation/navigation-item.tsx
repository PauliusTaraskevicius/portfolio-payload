import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

type Props = {
  label: string;
  href: string;
  isActive?: boolean;
};

export const NavigationItem = ({ label, href, isActive }: Props) => {
  return (
    <div className="flex justify-start items-center px-2">
      <Link
        href={href}
        className={cn(
          buttonVariants({
            size: "sm",
            variant: "none",
            className: "font-semibold text-lg",
          }),
          isActive &&
            buttonVariants({
              size: "sm",
              variant: "default",
              className: "font-semibold text-lg",
            })
        )}
      >
        {label}
      </Link>
    </div>
  );
};