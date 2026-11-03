import { Server } from "@modelcontextprotocol/sdk/server/index.js";

const server = new Server(
  {
    name: "hotmart-mcp",
    version: "1.0.0"
  },
  {
    capabilities: {}
  }
);

console.log("Servidor MCP iniciado");
