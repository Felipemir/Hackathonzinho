// Importa o módulo Fastify
const fastify = require("fastify")({ logger: true });

// Define uma rota simples na URL raiz
fastify.get("/", async (request, reply) => {
  return { message: "Bem-vindo ao Fastify!" };
});

// Inicia o servidor na porta 3000
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    console.log("Servidor rodando em http://localhost:3000");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
