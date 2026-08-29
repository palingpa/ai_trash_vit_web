# Vitality CS Intelligence

一个聚合 Team Vitality《Counter-Strike 2》分部公开资讯的静态单页网站预览。

## 页面内容

- 按时间整理最新战队、赛事与成员动态
- 支持按「全部 / 战队 / 成员」筛选资讯
- 展示 ZywOo、ropz、flameZ、mezii 与 apEX 当前阵容
- 提供 HLTV、Vitality 官方网站、X 和 Instagram 等来源入口
- 黄黑色高级视觉风格，并适配移动端浏览

## 文件结构

```text
index.html   页面结构与资讯内容
styles.css   页面样式与响应式布局
script.js    资讯数据与分类筛选交互
```

## 本地预览

在项目目录运行：

```bash
python -m http.server 4173
```

然后访问 <http://localhost:4173/>。

## 数据说明

当前页面使用前端静态数据作为展示内容。资讯来源均为公开渠道，正式使用时可将 `script.js` 中的 `items` 替换为 RSS、官方 API 或后端聚合接口返回的数据。

## 在线地址

GitHub Pages（启用后）：<https://palingpa.github.io/ai_trash/>
