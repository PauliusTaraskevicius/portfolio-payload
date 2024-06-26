import { cn } from "@/lib/utils";

export const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-full mx-auto max-w-screen-xl px-2.5", className)}>
      {children}
    </div>
  );
};
