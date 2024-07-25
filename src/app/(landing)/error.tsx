"use client";

import { Button } from "@/components/ui/button";
import { default as ErrorType } from "next/error";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Error = ({ error }: { error: ErrorType & { digest?: string } }) => {
  const router = useRouter();
  const reset = () => {
    router.refresh();
    console.log("reset");
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center ">
      <h1 className="text-9xl font-extrabold tracking-widest text-[#1A2238]">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        <p className="text-white">Something went wrong</p>
      </div>
      <Button size="xl" className="text-lg mt-5" onClick={() => reset()}>
        Try a gain
      </Button>
    </main>
  );
};

export default Error;
