import { FastifyPluginAsync } from 'fastify';
import root from './routes/root';
import example from './routes/example';
import openapi from './plugins/openapi';
import apiDocs from "@scalar/fastify-api-reference"

// Pass --options via CLI arguments in command to enable these options.
const app: FastifyPluginAsync = async (
    fastify,
    opts
): Promise<void> => {
  // Place here your custom code!

  // Plugins
  fastify.register(openapi)

  // Routes
  await fastify.register(apiDocs, {
      routePrefix: "/reference",
      configuration: {
          spec: () => fastify.swagger(),
      },
  });
  fastify.register(root)
  fastify.register(example, {prefix: "/example"})
};

export default app;
export { app }
