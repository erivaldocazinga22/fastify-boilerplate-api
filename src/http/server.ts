import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
	type ZodTypeProvider,
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
} from "fastify-type-provider-zod";
import { env } from "../config/env.config";
import { ExempleRoute } from "./routers";

const server = fastify().withTypeProvider<ZodTypeProvider>();

server.setSerializerCompiler(serializerCompiler);
server.setValidatorCompiler(validatorCompiler);
server.register(fastifyCors, { origin: true });

server.register(fastifySwagger, {
	openapi: {
		info: {
			title: "EC-Boilerplate-api",
			version: "0.0.1",
		},
	},
	transform: jsonSchemaTransform,
});

server.register(fastifySwaggerUi, { routePrefix: "/docs" });
server.register(ExempleRoute, {
	prefix: "/api",
});
server.listen({ port: env.PORT }).then(() => {
	console.log("HTTP server running!");
});
