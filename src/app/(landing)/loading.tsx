import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="h-[60px] w-[60px] animate-spin" />
    </div>
  );
};

export default Loading;
