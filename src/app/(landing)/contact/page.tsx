import type { Metadata } from "next";

import { ContentWrapper } from "@/components/content-wrapper";

import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact me",
  description:
    "Feel free to contact me with any ideas you got for your application.",
};

const ContactPage = () => {
  return (
    <ContentWrapper>
      <div className="flex w-full justify-center items-center pb-24 pt-20 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-52 lg:pb-52">
        <ContactForm />
      </div>
    </ContentWrapper>
  );
};

export default ContactPage;
