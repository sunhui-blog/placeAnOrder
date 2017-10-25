/**
 * Created by sunhui on 2017/10/25.
 */

module.exports = {
    entry: __dirname + "/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname,//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        loaders: [//加载器
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.json$/, loader: 'json-loader'},
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            {test: /\.(png|jpg|ttf)$/, loader: 'url-loader?limit=8192'},
            {test: /\.html$/, loader: 'file-loader'}
        ]
    }
};
