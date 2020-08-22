module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", { "legacy": true }], // 装饰器
        ["@babel/plugin-proposal-class-properties", { loose: true }], // class 高级语法
        ["@babel/plugin-transform-runtime", {
            corejs: 3
        }]
    ]
}