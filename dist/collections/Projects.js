"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
var adminsAndUser = function (_a) {
    var user = _a.req.user;
    if (user.email === process.env.PAYLOAD_ADMIN_EMAIL)
        return true;
    return {
        id: {
            equals: user.id,
        },
    };
};
exports.Projects = {
    slug: "projects",
    labels: {
        singular: "Project",
        plural: "Projects",
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
        // ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
        update: function () { return true; },
        delete: function () { return true; },
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
