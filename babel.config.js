module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset', // Vue CLI Babel preset，适用于 Vue 3
    '@babel/preset-env' // 你可以根据需要添加这个 preset 来支持更多的 JavaScript 特性
  ],
  plugins: [
    // 如果你使用 Vue 3 的 Composition API 或其它特殊功能，可能需要引入相关插件
    '@babel/plugin-syntax-dynamic-import'
  ]
}
