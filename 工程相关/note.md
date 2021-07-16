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

[Vue 换肤实践](https://juejin.cn/post/6844903553090191368)

- 提前写好 几套可以更换的主题， 进行替换
- 利用 颜色选择器， 来选择一种主题颜色，然后根据选择颜色，生成其他要使用颜色。再进行替换
- 思路：
  1. 给所有css选择器加一个样式名的类选择器，并把这个类名绑定到body元素上，然后通过DOM API来动态切换主题。以下代码演示了如何通过less编译统一给所有的css选择器添加一个样式名的类选择器。
  2. 使用可以在浏览器上直接运行的less，通过传入变量动态编译。
  3. 更换 haed 中引用的 style 文件
  4. 更换 style 文件中的 颜色
> 其实，最本质的都是 要改变 颜色。

##  主题换肤方案 (Vite + Vue3 + tailwindcss )
- [在 Vue 3 和 Vite 安装 Tailwind CSS](https://www.tailwindcss.cn/docs/guides/vue-3-vite)
- [使用预处理器](https://www.tailwindcss.cn/docs/using-with-preprocessors#)


# tailwindcss in vscode
- [Recommended configuration](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

# [GHelper](http://googlehelper.net/)

# 关于 tailwindcss 配置， 主题的使用
    ```js
    // --color-base 是 css变量
    // base: 'var(--color-base)' => bg-base
    module.exports = {
        theme: {
            extend: {
              colors: {
                amber: colors.amber,
                lime: colors.lime,
                rose: colors.rose,
                orange: colors.orange
              }
            },
            backgroundColor: {
              base: 'var(--color-base)',
              'off-base': 'var(--color-off-base)',
              primary: 'var(--color-primary)',
              secondary: 'var(--color-secondary)',
              muted: 'var(--color-muted)'
            }
        }
    }
    ```