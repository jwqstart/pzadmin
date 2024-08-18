const {defineConfig} = require('@vue/cli-service')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
    transpileDependencies: true,

    lintOnSave: false,//关闭语法检查

    devServer: {
        port: 8086, // 此处修改你想要的端口号
    },

    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    }

})

