export interface Config {
  collections: {
    users: User;
    projects: Project;
    media: Media;
    "payload-preferences": PayloadPreference;
    "payload-migrations": PayloadMigration;
  };
  globals: {};
}

export interface User {
  id: string;
  projects?: (string | Project)[] | null;
  email: string;
  updatedAt: string;
  createdAt: string;
}

export interface Project {
  id: string;
  user?: string | User;
  name: string;
  slug: string;
  brief: string;
  url: string;
  description: string;
  image: {
    image: string | Media;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}

export interface Media {
  id: string;
  user?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  src?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}

export interface PayloadPreference {
  id: string;
  user: {
    relationTo: "users";
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}

declare module "payload" {
  export interface GenerateTypes extends Config {}
}
