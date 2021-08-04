import * as fs from "fs";

module.exports = {
  type: "cockroachdb",
  host: "<global-host>",
  port: 26257,
  username: "<user>",
  password: "<password>",
  database: "<cluster-name>.vault",
  ssl: {
     ca: fs.readFileSync('<home-directory>/.postgresql/root.crt').toString()
   },
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};
