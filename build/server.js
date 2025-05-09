#!/usr/bin/env node
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getHKList } from "./query.js";
// 创建服务器实例
const server = new McpServer({
    name: "hk",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
// 注册工具
server.tool('get_hk_list', '获取王者荣耀的英雄列表', getHKList);
console.log('server started', server);
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
export default function createServer() {
    return server;
}
;
