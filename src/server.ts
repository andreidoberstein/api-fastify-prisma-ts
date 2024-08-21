import fastify from 'fastify';
import cors from '@fastify/cors';
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { prisma } from "./lib/prisma";
import { createTrip } from "./routes/create-trip";
import { confirmTrip } from "./routes/confirm-trip"

const app = fastify();

app.register(cors, {
  // origin: 'true',
  origin: '*',
  // origin: 'http:localhost:3000'
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip)
app.register(confirmTrip)

// app.get("/cadastrar", async () => {
//   await prisma.trip.create({
//     data: {
//       destination: 'Florianópolis',
//       starts_at: new Date(),
//       ends_at: new Date(),
//     }
//   })

//   return "Registro cadastrado com sucesso!"
// })

// app.get("/listar", async () => {
//   const trips = await prisma.trip.findMany()

//   return trips
// })

// app.get("/", () => {
//   return "Dalee";
// })

app.listen({ port: 3333 }).then(() => {
  console.log(`Server running at port 3333`)
})