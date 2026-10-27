# 伊伊的乱七八糟

一个记录学习与生活的个人博客，使用原生 HTML、CSS 和 JavaScript，零运行依赖。

## 功能

- 响应式首页、个人介绍和三篇可编辑的起始文章
- 按分类筛选、关键词搜索与空结果提示
- 深浅主题切换，记住选择，首次访问跟随系统主题
- 键盘焦点、跳到正文链接、辅助技术状态提示与减少动画支持

文章目前为起始示例文案，可以直接改成自己的真实经历。

## 本地运行

在仓库根目录执行（需要 Python 3）：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

在浏览器中打开本地服务器。也可以直接打开 `index.html`；浏览器可能限制文件模式下的主题偏好存储。

## 文件结构

```text
index.html              首页、搜索与分类
about.html              个人介绍
posts/hello.html        开始写博客
posts/terminal.html     命令行学习笔记
posts/small-steps.html  前端学习清单
style.css               全站样式与移动端布局
script.js               主题、搜索与筛选
```

新增文章时，在 `posts/` 中复制一个文章页面，修改标题、日期和正文，再在首页 `.post-grid` 中添加带有 `data-category` 的文章卡片。文章页使用 `../style.css` 与 `../script.js`。

## 发布到 GitHub Pages

1. 将更改提交并推送到 GitHub 仓库。
2. 在仓库 **Settings → Pages → Build and deployment** 中选择 **Deploy from a branch**。
3. 选择 `main` 分支、`/ (root)`，保存。
4. 等待 GitHub 部署完成；默认项目站点为 `https://annabelleqaq.github.io/my-blog/`。

所有站内资源使用相对路径，兼容项目站点的 `/my-blog/` 路径。无需构建命令，也无需密钥。
