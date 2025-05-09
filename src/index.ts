#!/usr/bin/env node
import createServer from './server.js';
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

async function main() {
  const server = createServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // console.log("开始运行王者荣耀 MCP Server");
}
main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});

export default createServer;