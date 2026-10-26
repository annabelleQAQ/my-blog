# 我的第一个博客

纯手写，零依赖。三个文件就能跑。

## 文件都是干什么的

| 文件 | 作用 |
|---|---|
| `index.html` | 首页。HTML 决定"页面上有什么" |
| `style.css` | 样式。CSS 决定"长什么样" |
| `posts/hello.html` | 一篇具体文章 |
| `README.md` | 就是本文件，给人看的说明书 |

## 本地怎么预览

双击 `index.html` 就行。改完 CSS 保存，刷新浏览器就能看到变化。

## 怎么改（试试这几个）

1. 打开 `style.css`，把 `--accent` 的颜色改一个值 → 刷新，看链接颜色变了
2. 把 `body` 里的 `font-size: 17px` 改成 `20px` → 字变大
3. 打开 `index.html`，在 `<main>` 里复制一个 `<article>` 块 → 多一篇文章
4. 把 `--paper` 改成 `#1a1a1a`、`--ink` 改成 `#e8e2d8` → 你就有了暗色模式

## 怎么上线（白嫖，不用买服务器）

**方式一：Netlify Drop（最快，30 秒）**
1. 打开 https://app.netlify.com/drop
2. 把整个 `my-blog` 文件夹拖进网页
3. 得到一个 `xxx.netlify.app` 的地址，这就是你的博客了

**方式二：GitHub Pages（更"程序员"一点）**
1. 在 GitHub 建一个仓库，名字叫 `你的用户名.github.io`
2. 把这三个文件传上去
3. 等一两分钟，访问 `https://你的用户名.github.io`

## 下一步可以加什么

- 一个"关于我"页面
- 暗色模式切换按钮（需要一点点 JS）
- 用 Git 管理版本，每次改完 `git commit` 一次
