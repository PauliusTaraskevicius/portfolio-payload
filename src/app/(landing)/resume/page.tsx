import { ContentWrapper } from "@/components/content-wrapper";

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
