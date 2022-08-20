import type { ConfigFile } from "@rtk-query/codegen-openapi";

const generated = "src/generated";

const config: ConfigFile = {
  schemaFile: `${generated}/swagger.json`,
  apiFile: "./src/base-api.ts",
  apiImport: "baseApi",
  outputFile: `${generated}/api.ts`,
  exportName: "api",
  hooks: true,
};

export default config;
