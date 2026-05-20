## 前端脚手架搭建

### 环境要求

- Node.js >= 14.0.0

### 安装

```shell
# install it globally
$ npm install -g zxs-cli

# or yarn
$ yarn global add zxs-cli
```

### 使用 

#### Quick Start 

```shell
$ zx create <name> [-f|--force]
```

#### Options

- `-f, --force`: Overwrite if the target exists

### GitHub Token 配置（可选，推荐）

为了避免 GitHub API 速率限制，建议配置 GitHub Token：

#### 1. 生成 GitHub Token

1. 访问 [GitHub Settings - Personal Access Tokens](https://github.com/settings/tokens)
2. 点击 "Generate new token" -> "Generate new token (classic)"
3. 设置 Token 名称，如 "zx-cli"
4. 勾选 `repo` 权限（如果是公开仓库，只需要 `public_repo`）
5. 点击 "Generate token" 并复制生成的 token

#### 2. 配置 Token

**方式 1：设置环境变量（推荐）**

在你的 shell 配置文件中添加（`~/.zshrc` 或 `~/.bashrc`）：

```shell
export GITHUB_TOKEN=your_github_token_here
```

然后重新加载配置：

```shell
source ~/.zshrc  # 或 source ~/.bashrc
```

**方式 2：临时使用**

```shell
GITHUB_TOKEN=your_github_token_here zx create <name>
```

> **注意**：
> - 未配置 Token 时，每小时限制 60 次请求
> - 配置 Token 后，每小时限制 5000 次请求