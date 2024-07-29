"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
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
exports.Users = {
    slug: "users",
    auth: true,
    access: {
        read: function () { return true; },
        create: function () { return true; },
        // ({ req }) => req.user.email === process.env.PAYLOAD_ADMIN_EMAIL,
        update: function () { return true; },
        delete: function () { return true; },
    },
    admin: {
        useAsTitle: "email",
    },
    fields: [
        {
            name: "projects",
            label: "Projects",
            admin: {
                condition: function () { return false; },
            },
            type: "relationship",
            relationTo: "projects",
            hasMany: true,
        },
    ],
};
