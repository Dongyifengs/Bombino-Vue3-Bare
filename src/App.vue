<template>
  <div id="app">
    <!-- 应用的根容器 -->
    <!-- 所有内容都应放在 #app 内，不要删除 #app 元素（Vue 必需） -->
    <img alt="Vue Logo" src="./assets/logo.png" />
    <HelloWorld :msg="'欢迎使用你的 Vue CLI 面板'" />
  </div>
</template>

<script>
// 引入必要模块
import { defineComponent, onMounted, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

// 动态 CSS 变量自动处理所有应用主题和更改
import starlette from "starlette";

// 异步 evalScript 方法
import { evalScript } from "cluecumber";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    // 声明响应式数据
    const csInterface = ref(null);

    // 生命周期挂载时执行
    onMounted(() => {
      csInterface.value = new CSInterface();
      starlette.init(); // 初始化动态主题
    });

    // 触发事件方法
    const dispatchEvent = (name, data) => {
      const event = new CSEvent(name, "APPLICATION");
      event.data = data;
      csInterface.value.dispatchEvent(event);
    };

    // 加载脚本方法
    const loadScript = async (path) => {
      return await evalScript(`$.evalFile('${path}')`);
    };

    // 返回方法和数据
    return {
      csInterface,
      dispatchEvent,
      loadScript,
    };
  },
});
</script>

<style scoped>
/* 匹配应用主题的辅助样式 */
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
:root {
  background-color: var(--color-bg);
  color: var(--color-default);
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
}

#app::-webkit-scrollbar {
  display: block;
}
body::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar {
  background-color: var(--color-scrollbar);
  width: var(--width-scrollbar-track);
}
::-webkit-scrollbar-thumb {
  width: var(--width-scrollbar-track);
  background: var(--color-scrollbar-thumb);
  border-radius: var(--radius-scrollbar-thumb);
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-scrollbar-thumb-hover);
}
::-webkit-scrollbar-resizer {
  display: none;
  width: 0px;
  background-color: transparent;
}
::-webkit-scrollbar-button {
  height: 0px;
}
::-webkit-scrollbar-corner {
  display: none;
}
</style>
