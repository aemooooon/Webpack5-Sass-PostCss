# Webpack5 Sass PostCSS

1. `npm init -y` 初始化 `package.json`

2. `npm i -D webpack webpack-cli` 安装 `Webpack`

3. `npx webpack` 原始运行命令

4. `npm i -D css-loader style-loader` 安装 CSS 加载器。Notes:  `style-loader` 会把css用js处理，然后动态渲染到页面位于head的style标签里面。

5. `create webpack.config.js`

6. 添加scripts到packae.json
```javascript
    "build": "webpack",
    "build:watch": "webpack --watch"
```

7. `npm i -D sass sass-loader` 安装sass加载器，并修改rules，添加sass支持。Notes: (sc|c)同时支持常规css和scss 另外: (s[ac]|c)ss 支持sass、scss、css
```javascript
rules: [
            {
                test: /\.(sc|c)ss$/i,  // (sc|c)同时支持常规css和scss 另外: (s[ac]|c)ss 支持sass、scss、css
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"], 
            }
        ]
```

8. `npm i -D mini-css-extract-plugin` 安装这个插件，可以把style.css单独生成一个css文件供html引入。区别于style-loader

9. ` npm i -D postcss postcss-loader postcss-preset-env autoprefixer` 安装postcss和autoprefixer

10. create `postcss.config.js` file with content below:
```javascript
module.exports = {
    plugins: [
        require("postcss-preset-env")
    ]
};

```

11. create `.browserslistrc` file with content below:
```bash
last 2 versions
> 0.5%
IE 10
```
