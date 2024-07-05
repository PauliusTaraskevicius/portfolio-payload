import Image from "next/image";

import escapeHTML from "escape-html";
import { Fragment } from "react";

export const richTextSerializer = (children) =>
  children.map((node, i) => {
    if (Text.isText(node)) {
      let text = (
        <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />
      );

      if (node.bold) {
        text = <strong key={i}>{text}</strong>;
      }

      if (node.code) {
        text = <code key={i}>{text}</code>;
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>;
      }

      if (node.text === "") {
        text = <br />;
      }

      // Handle other leaf types here...

      return <Fragment key={i}>{text}</Fragment>;
    }

    if (!node) {
      return null;
    }

    switch (node.type) {
      case "h1":
        return <h1 key={i}>{richTextSerializer(node.children)}</h1>;
      // Iterate through all headings here...
      case "h6":
        return <h6 key={i}>{richTextSerializer(node.children)}</h6>;
      case "blockquote":
        return (
          <blockquote key={i}>{richTextSerializer(node.children)}</blockquote>
        );
      case "ul":
        return <ul key={i}>{richTextSerializer(node.children)}</ul>;
      case "ol":
        return <ol key={i}>{richTextSerializer(node.children)}</ol>;
      case "li":
        return <li key={i}>{richTextSerializer(node.children)}</li>;
      case "link":
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {richTextSerializer(node.children)}
          </a>
        );
      case "upload":
        return (
          <Image
            key={i}
            src={escapeHTML(node.value.url)}
            alt="Girl in a jacket"
            width="500"
            height="500"
            className="object-cover"
          />
        );

      default:
        return <p key={i}>{richTextSerializer(node.children)}</p>;
    }
  });
