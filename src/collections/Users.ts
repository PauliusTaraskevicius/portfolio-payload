import { Access, CollectionConfig } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.email === process.env.PAYLOAD_ADMIN_EMAIL) return true;

  return {
    id: {
      equals: user.id,
    },
  };
};

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    read: () => true,
    create: () => true,
    // ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "projects",
      label: "Projects",
      admin: {
        condition: () => false,
      },
      type: "relationship",
      relationTo: "projects",
      hasMany: true,
    },
  ],
};
