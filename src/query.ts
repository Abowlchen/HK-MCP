import axios from "axios";

// 获取王者荣耀的英雄列表
export const getHKList = async () => {
  try {
    const response = await axios.get('https://pvp.qq.com/web201605/js/herolist.json');
    return {
      content: [{
        text: JSON.stringify(response.data),
        type: "text" as const,
        _meta: {}
      }]
    };
  } catch (error) {
    return {
      isError: true,
      content: [{
        text: `请求失败: ${error}`,
        type: "text" as const,
        _meta: {}
      }],
      _meta: {}
    };
  }
}