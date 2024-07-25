import type { Metadata } from "next";

import { ContentWrapper } from "@/components/content-wrapper";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Self-taught, task-driven, innovative developer with 2 years of experience in web development as a freelancer.Proficient in creating responsive web applications from scratch as well as maintaining and designing websites for clients.Always looking to improve day by day my technical skills.",
};

const ResumePage = () => {
  return (
    <ContentWrapper>
      <div className="flex w-full h-full justify-center  scrollbar-thumb-rounded-sm scrollbar-track-rounded-sm  scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thin">
        <iframe src="CV.pdf" width="100%" height="100%" className="h-[90vh]" />
      </div>
    </ContentWrapper>
  );
};

export default ResumePage;
