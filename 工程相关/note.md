# ago
## Vite 中配置不同环境地址
    - 添加 配置文件 `.env.development`
    - 取值 import.meta.env.xxx

# 2021.07.07
## Vue 组件中使用 `<script setup></script>`, 定义组件 name 
    vue 会自动使用文件名 作为 name

# 2021.07.08
## 国际化

- 查看网上总结的国际化方案 `https://juejin.cn/post/6844903778471280653`    
    1. 使用 类似于 I18 的插件， 将要用到的语言 打包成一个 语言包。 现在进行开发，然后将 文本集合、翻译，替换
    2. 提取文本的过程，交给 babel , 利用 翻译 API 生成翻译后文本 和 变量。 或者就是，提取本文，生成文件，交给翻译团队
    3. 如果数据较大的话，这块可以做成翻译平台， 通过这个平台， 前端 和 翻译团队 来进行操作。前端将要翻译的文本上传到平台，翻译团队，进行操作。
- 查看element-ui 和 naiveui 的国际化方案
    - naive UI 的国际化，使用过 全局配置组件来完成， 目前只看到 中文 和 英文 的翻译。
        在其内部并没有做类似于 i18 的配置。
    - elementUI 
        使用的是 vue-i18n v.9

## 主题换肤

[图片转换成 font 文件](https://icomoon.io)

[theme-chalk-preview](https://github.com/ElementUItheme-chalk-preview)

[elementui 换肤案例](https://github1s.com/ElementUI/theme-preview)