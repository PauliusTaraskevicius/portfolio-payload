import { getPayloadClient } from "@/get-payload";
import { notFound } from "next/navigation";

import { ContentWrapper } from "@/components/content-wrapper";
import Image from "next/image";

import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { TypeWithID } from "payload/types";

type Props = {
  params: {
    portfolioId: string;
  };
};

const PortfolioIdPage = async ({ params }: Props) => {
  const { portfolioId } = params;

  const payload = await getPayloadClient();

  const { docs: projects } = await payload.find({
    collection: "projects",
    limit: 1,
    where: {
      id: {
        equals: portfolioId,
      },
    },
  });

  const [project]: (TypeWithID & Record<string, unknown>)[] = projects;

  if (!project) return notFound();

  // const validUrls = project.image
  //   .map(({ image }) => (typeof image === "string" ? image : image.url))
  //   .filter(Boolean) as string[];

  // const richTextSerializer = (children: JSX.Element[] | string | any) =>
  //   children.map((node: Record<string, unknown>, i: number) => {
  //     if (Text.isText(node)) {
  //       let text = (
  //         <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
  //       );

  //       if (node.bold) {
  //         text = <strong key={i}>{text}</strong>;
  //       }

  //       if (node.code) {
  //         text = <code key={i}>{text}</code>;
  //       }

  //       if (node.italic) {
  //         text = <em key={i}>{text}</em>;
  //       }

  //       if (node.text === "") {
  //         text = <br />;
  //       }

  //       return <Fragment key={i}>{text}</Fragment>;
  //     }

  //     if (!node) {
  //       return null;
  //     }

  //     switch (node.type) {
  //       case "h1":
  //         return <h1 key={i}>{richTextSerializer(node.children)}</h1>;
  //       // Iterate through all headings here...
  //       case "h6":
  //         return <h6 key={i}>{richTextSerializer(node.children)}</h6>;
  //       case "blockquote":
  //         return (
  //           <blockquote key={i}>{richTextSerializer(node.children)}</blockquote>
  //         );
  //       case "ul":
  //         return <ul key={i}>{richTextSerializer(node.children)}</ul>;
  //       case "ol":
  //         return <ol key={i}>{richTextSerializer(node.children)}</ol>;
  //       case "li":
  //         return <li key={i}>{richTextSerializer(node.children)}</li>;
  //       case "link":
  //         return (
  //           <a href={escapeHTML(node.url)} key={i}>
  //             {richTextSerializer(node.children)}
  //           </a>
  //         );
  //       case "upload":
  //         return (
  //           <Image
  //             key={i}
  //             src={escapeHTML(node.value.url)}
  //             alt="Girl in a jacket"
  //             width="500"
  //             height="500"
  //             className="object-cover"
  //           />
  //         );

  //       default:
  //         return <p key={i}>{richTextSerializer(node.children)}</p>;
  //     }
  //   });

  return (
    <ContentWrapper>
      {" "}
      {/* <div className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {project.name}
        </h1>

        <div>{richTextSerializer(project.description)}</div>
      </div> */}
      {/* {validUrls.map((url, i) => (
          <div key={i} className="relative h-full w-full">
            <Image
              height={500}
              width={500}
              loading="eager"
              className="object-cover"
              src={url!}
              alt="Project image"
            />
          </div>
        ))} */}
    </ContentWrapper>
  );
};

export default PortfolioIdPage;
