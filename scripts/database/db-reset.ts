import { client } from "../../src/database/client";

await client`
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
`;

console.log("✅ Database reset.");

await client.end();
