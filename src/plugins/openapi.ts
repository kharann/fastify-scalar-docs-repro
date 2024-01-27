import fastifySwagger from "@fastify/swagger";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";

import fp from "fastify-plugin";

export default fp(async (fastify) => {
    fastify.setValidatorCompiler(validatorCompiler);
    fastify.setSerializerCompiler(serializerCompiler);
    fastify.register(fastifySwagger, {
        openapi: {
            info: {
                title: "Authorship Authentication API",
                description: "An API to manage authorship authentication",
                version: "1.0.0",
            },
            servers: [],
        },
        transform: jsonSchemaTransform,
    });
});
