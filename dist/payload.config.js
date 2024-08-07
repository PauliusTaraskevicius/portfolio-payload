"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var path_1 = __importDefault(require("path"));
var Users_1 = require("./collections/Users");
var Projects_1 = require("./collections/Projects");
var Media_1 = require("./collections/Media");
var dotenv_1 = __importDefault(require("dotenv"));
var plugin_cloud_storage_1 = require("@payloadcms/plugin-cloud-storage");
var s3_1 = require("@payloadcms/plugin-cloud-storage/s3");
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, "../.env"),
});
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [Users_1.Users, Projects_1.Projects, Media_1.Media],
    admin: {
        user: "users",
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: "- Portfolio",
            favicon: "/favicon.ico",
            ogImage: "/website.svg",
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGODB_URL,
    }),
    plugins: [
        // storage-adapter-placeholder
        (0, plugin_cloud_storage_1.cloudStorage)({
            collections: {
                media: {
                    adapter: (0, s3_1.s3Adapter)({
                        config: {
                            endpoint: process.env.S3_ENDPOINT,
                            region: process.env.S3_REGION,
                            credentials: {
                                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
                            },
                        },
                        bucket: process.env.S3_BUCKET,
                    }),
                },
            },
        }),
    ],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
});
