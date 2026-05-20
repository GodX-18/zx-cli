#! /usr/bin/env node
import { program } from "commander";
import { check } from "../lib/create.js";
import chalk from "chalk";
import figlet from "figlet";
import { createRequire } from "module";

// 兼容 Node 14+，使用 createRequire 导入 JSON
const require = createRequire(import.meta.url);
const info = require("../package.json");

program
  .command("create <app-name>")
  .description("create a new project")
  .option("-f, --force", "overwrite target directory if it exist") // 是否强制创建，当文件夹已经存在
  .action((name, options) => {
    // 在 create.js 中执行创建任务
    check(name, options);
  });

program
  // 配置版本号信息
  .version(`v${info.version}`)
  .usage("<command> [option]");

program.on("--help", () => {
  // 使用 figlet 绘制 Logo
  console.log(
    "\r\n" +
      figlet.textSync("GodX", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true
      })
  );
  // 新增说明信息
  console.log(`\r\nRun ${chalk.cyan(`zx <command> --help`)} show details\r\n`);
});

// 解析用户执行命令传入参数
program.parse(process.argv);
