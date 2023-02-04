---
outline: [2, 3]
---
# 开发前建议

> 强烈建议在开发前读一读这里的内容，总会有些帮助的。

## Nanote 架构

### qiankun
考虑到插件开发者的技术栈不同，Nanote 使用微前端框架 [qiankun](https://github.com/umijs/qiankun) 来支持插件系统，
对于复杂的组件，你可以尽情借助 `vue react` 等前端框架的力量，也可以使用 `原生 DOM Jquery` 等方式写一些简单组件。

::: tip
如果你不了解此框架也没有关系，这丝毫不会影响你对插件的开发，你只需遵守后面的开发规范就好
:::

qiankun 是国内目前最成熟的微前端框架了，然而由于 ”微前端“ 概念的产生不是很久，所以会存在一些问题：

- 主、子应用样式不能保证完全隔离，相互之间存在 ”羁绊“（干扰）
- JS 沙箱的劫持只有一级，修改内置对象会有不可估量的危害
  ```javascript
  // app1
  window.localStorage.setItem = null

  // app2
  window.localStorage.setItem()
  // TypeError: window.localStorage.setItem is not a function
  ```

- **不支持 Vite**，vue 开发者不能使用 `create-vue` 脚手架创建应用，而是要用基于 `webpack` 的 [vue-cli](https://github.com/vuejs/vue-cli)，
尽管它已经处于维护模式，但是还是能用的。
