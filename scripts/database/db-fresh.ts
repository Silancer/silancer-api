import { $ } from "bun";

await $`bun run db:reset`;
await $`bun run db:migrate`;
await $`bun run db:seed`;

console.log("✅ Fresh database created.");
