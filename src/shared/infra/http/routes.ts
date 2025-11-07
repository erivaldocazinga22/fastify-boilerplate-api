import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";

export const MainRoute: FastifyPluginAsyncZod = async (server) => {
	server.register(() => {});
};
