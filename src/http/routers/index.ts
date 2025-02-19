import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";

export const ExempleRoute: FastifyPluginAsyncZod = async server => {
	server.get("/hello", async () => {
		return "Hello world";
	});
	server.post(
		"/hello",
		{
			schema: {
				body: z.object({
					name: z.string(),
				}),
				response: {
					201: z.object({
						name: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { name } = request.body;
			reply.status(201).send({
				name,
			});
		}
	);
};
