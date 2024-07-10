import { CollectionConfig, Access } from "payload/types";
import { User } from "@/payload-types";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.email === process.env.PAYLOAD_ADMIN_EMAIL) return true;

  return {
    id: {
      equals: user.id,
    },
  };
};

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  access: {
    read: () => true,
    create: () => true,
    // ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
    update: () => true,
    delete: () => true,
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
    },
    {
      name: "url",
      label: "Url",
      type: "text",
      required: true,
    },
    {
      name: "brief",
      label: "Brief",
      type: "textarea",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      label: "Project description",
    },
    {
      name: "image",
      type: "array",
      label: "Project image",

      required: true,
      labels: {
        singular: "Image",
        plural: "image",
      },
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
  ],
};
