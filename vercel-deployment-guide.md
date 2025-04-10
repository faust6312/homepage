# Matrix 风格个人主页 Vercel 部署指南

本文档提供了将您的 Matrix 风格个人主页（带有数字雨背景和红蓝胶囊按钮）部署到 Vercel 的详细步骤。

## 准备工作

在开始部署之前，请确保您已经：

1. 拥有一个 [Vercel](https://vercel.com) 账户（可以使用 GitHub、GitLab 或邮箱注册）
2. 已下载项目文件（将随本指南一起提供）

## 部署方法一：使用 Vercel CLI（命令行工具）

这是最直接的部署方法，适合有一定技术基础的用户。

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```
   按照提示完成登录过程。

3. **部署项目**
   - 解压下载的项目文件
   - 在终端中导航到项目目录
   - 运行部署命令：
     ```bash
     vercel
     ```
   - 按照提示操作，大多数情况下选择默认选项即可
   - 部署完成后，Vercel 会提供一个访问链接

## 部署方法二：通过 Vercel 网站

这种方法更加直观，适合所有用户。

1. **登录 Vercel 网站**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub、GitLab 或邮箱登录

2. **创建新项目**
   - 在 Vercel 仪表板中点击 "Add New..." > "Project"
   - 选择 "Import Git Repository"
   - 点击 "Deploy without Git" 选项（在页面底部）

3. **上传项目文件**
   - 解压下载的项目文件
   - 将整个文件夹拖放到上传区域，或点击选择文件
   - Vercel 会自动检测到这是一个 Next.js 项目

4. **配置部署选项**
   - 项目名称：输入您想要的名称，例如 "matrix-homepage"
   - 框架预设：确保选择 "Next.js"
   - 其他设置保持默认值
   - 点击 "Deploy" 按钮

5. **部署完成**
   - 部署成功后，Vercel 会提供一个 `*.vercel.app` 的 URL
   - 点击该链接即可访问您的 Matrix 风格个人主页

## 自定义域名（可选）

如果您想使用自己的域名而不是 Vercel 提供的默认域名：

1. 在项目仪表板中，点击 "Domains" 选项卡
2. 点击 "Add" 按钮
3. 输入您的域名，然后按照说明进行 DNS 配置

## 更新网站（可选）

如果您想在未来更新网站：

1. 对项目文件进行修改
2. 使用相同的方法重新部署
   - 如果使用 Vercel CLI：在项目目录中运行 `vercel`
   - 如果使用网站：重复上述上传步骤

## 故障排除

如果您在部署过程中遇到任何问题：

1. 确保您的网络连接稳定
2. 检查 Vercel 构建日志以获取详细错误信息
3. 确保所有依赖项都正确列在 `package.json` 文件中

## 技术支持

如果您需要进一步的帮助，可以：

1. 查阅 [Vercel 文档](https://vercel.com/docs)
2. 访问 [Vercel 支持中心](https://vercel.com/help)

祝您部署顺利！
