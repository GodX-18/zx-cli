// 通过 axios 处理请求
import axios from "axios";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve, join } from "path";

// 获取当前文件目录（兼容 Node 14+）
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 加载 .env 文件（从项目根目录）
dotenv.config({ path: join(__dirname, "..", ".env") });

// 配置请求头，支持 GitHub Token 认证
const headers = {};
// 从环境变量中读取 GitHub Token（可选）
if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
}

axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取模板列表
 * @returns Promise
 */
export async function getRepoList() {
  return axios.get("https://api.github.com/orgs/zx-cli/repos", { headers });
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
export async function getTagList(repo) {
  return axios.get(`https://api.github.com/repos/zx-cli/${repo}/tags`, { headers });
}
