import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { Users } from "./collections/Users";
import { Projects } from "./collections/Projects";
import { Media } from "./collections/Media";
import dotenv from 'dotenv'
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})


export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Projects, Media],
  routes: {
    admin: "/admin",
  },
  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Portfolio",
      favicon: "/favicon.ico",
      ogImage: "/website.svg",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),

  plugins: [
    // storage-adapter-placeholder
    cloudStorage({
      collections: {
        media: {
          adapter: s3Adapter({
            config: {
              endpoint: process.env.S3_ENDPOINT,
              region: process.env.S3_REGION,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID!,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
              },
            },
            bucket: process.env.S3_BUCKET!,
          }),
        },
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
