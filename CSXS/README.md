## 关于 manifest.xml 的重要说明：

```xml
<DispatchInfo>
  <Resources>
    <!-- 默认（无热重载） -->
    <MainPath>./index.html</MainPath>

    <!-- 带热重载的开发版本 -->
    <MainPath>./index-dev.html</MainPath>

    <!-- 必须在 'npm run build' 和 'npm run serve' serve 命令之间手动切换上述命令，然后重新启动主机应用程序才能生效。 -->

    <!-- 确保包含 NodeJS 的参数： -->
    <CEFCommandLine>
      <Parameter>--enable-nodejs</Parameter>
      <!-- 除非启用混合内容，否则不会显示在窗口 > 扩展中 -->
      <Parameter>--mixed-context</Parameter>
      <!-- 无法在 index-dev.html 的 iframe 中使用 require（'fs'） -->
    </CEFCommandLine>
  </Resources>
```
