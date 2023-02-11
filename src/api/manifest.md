# Manifest 规范

`manifest.md` 是一个描述插件主要信息的文件，格式为 `markdown`

文件内容由 `Front Matter`，`overview`，`changes` 三部分构成

## Front matter

关于什么是 Front Matter，可以在 [VuePress 这篇文章](https://vuepress.vuejs.org/zh/guide/frontmatter.html#front-matter)
了解一下。

Nanote 目前支持的变量如下：

```txt
- name --------- 插件名称
- author ------- 开发者
- version ------ 版本
- home --------- 主页
- repo --------- 仓库地址
- widget ------- 是否包含微组件
```

## overview

> 📄 Nanote 插件清单撰写规范：

### 标题规范

1. 二级标题 overview 的内容被视为该插件的摘要（简介）
2. 二级标题 changes 的内容被视为该插件的版本更迭变化
3. 二级标题下可以嵌套三级标题等更低级的内容
4. 标题上不要添加超链接、加粗等其他多余格式

### 内容规范

1. 每一行的末尾不要留空格（一般编辑器的格式化插件都可以做到）
2. 图片引用远程链接，不要引用本地 <br/>
   ![favicon](https://nanote.cn/favicon.png) <br/>
3. 可以使用代码块
   ```js
   function sayHello() {
     console.log("Hello Nanote!")
   }
   ```

## changes

### 0.0.1

添加了一些规范

## 完整样例

~~~markdown
---
name: nanote-plugin-guide
author: Nickel
version: 0.0.1
home: https://nanote.cn/notes
repo: https://github.com/imxuedi/nanote.git
widget: false
---

## overview

> 📄 Nanote 插件清单撰写规范：

### 标题规范

1. 二级标题 overview 的内容被视为该插件的摘要（简介）
2. 二级标题 changes 的内容被视为该插件的版本更迭变化
3. 二级标题下可以嵌套三级标题等更低级的内容
4. 标题上不要添加超链接、加粗等其他多余格式

### 内容规范

1. 每一行的末尾不要留空格（一般编辑器的格式化插件都可以做到）
2. 图片引用远程链接，不要引用本地 <br/>
   ![favicon](https://nanote.cn/favicon.png) <br/>
3. 可以使用代码块
   ```js
   function sayHello() {
     console.log("Hello Nanote!")
   }
   ```

## changes

### 0.0.1

添加了一些规范
~~~
