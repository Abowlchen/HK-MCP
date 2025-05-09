import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { getHKList } from "./query.js";
// 创建服务器实例
const server = new McpServer({
    name: "weather",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
// 注册工具
server.tool('get_hk_list', '获取王者荣耀的英雄列表', getHKList);
console.log('server started', server);
export default function createServer() {
    return server;
}
;
