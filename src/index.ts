import dotenv from "dotenv";

dotenv.config({
  path: [".env", `.env.${process.env.NODE_ENV}`],
  override: true,
  //   quiet: true,
});

console.log(process.env.NODE_ENV);
console.log(typeof process.env.TEST_BOOLEAN);
console.log(typeof process.env.TEST_NUMBER);

const connectionString = process.env.DATABASE_URL;

console.log(connectionString);
