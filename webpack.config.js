const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",

    plugins: [new MiniCssExtractPlugin()],

    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/i, // (sc|c)同时支持常规css和scss 另外: (s[ac]|c)ss 支持sass、scss、css
                use: [MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"], // style-loader 把css写在js里面，然后通过head中间的style渲染出来，"MiniCssExtractPlugin.loader" 将会生成一个单独的css文件
            },
        ]
    },

    devtool: "source-map",

}