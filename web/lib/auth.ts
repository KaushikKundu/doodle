import { betterAuth } from "better-auth";
import { prismaSingletonClient } from "../../../packages/db/src";
import { prismaAdapter } from "better-auth/adapters/prisma";
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    database: prismaAdapter(prismaSingletonClient, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
});
