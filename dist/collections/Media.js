"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = void 0;
exports.Media = {
    slug: "media",
    labels: {
        singular: "Media",
        plural: "Media",
    },
    access: {
        read: function () { return true; },
        create: function () { return true; },
        update: function () { return true; },
        delete: function () { return true; },
    },
    upload: true,
    fields: [
        {
            name: "alt",
            label: "Alt",
            type: "text",
            required: true,
        },
    ],
};
