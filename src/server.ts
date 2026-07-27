import { app } from "./app";

app.listen({
  hostname: "0.0.0.0",
  port: Number(process.env.PORT ?? 3000)
});

console.log(`Server running`);