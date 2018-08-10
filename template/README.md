# {{ name }}

> {{ description }}

## 注意点

   1. serverIP 和 static -> config.json 是因为引入libs,里面需要用到

## 项目使用技术

   vue + vue-router + vuex + element + geekLibs + i18n 实现国际化

## Build Setup

``` bash
# install dependencies
npm install

# git submodule
git submodule add http://172.16.19.6:82/FED/GEEKLIB.git src/libs

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
{{#unit}}

# run unit tests
npm run unit
{{/unit}}
{{#e2e}}

# run e2e tests
npm run e2e
{{/e2e}}
{{#if_or unit e2e}}

# run all tests
npm test
{{/if_or}}
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
