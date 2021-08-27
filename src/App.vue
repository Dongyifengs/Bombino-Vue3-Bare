<template>
  <div id="app">
    <!-- This is the root of your panel -->
    <!-- Content should go inside #app, never delete the #app element (required by Vue) -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue CLI panel" />
  </div>
</template>

<script>
// You can access this App.vue file from any other component via `this.$root.$children[0]`
// See `./components/HelloWorld.vue` for example of CSInterface and this.app

// Create your own components and import them here
import HelloWorld from "./components/HelloWorld.vue";

// Dynamic CSS variables that automatically handle all app themes and changes:
// https://github.com/Inventsable/starlette
import starlette from "starlette";

// Package to get around CORS policies since the most recent Adobe updates block iframes from evalScript return values
import { evalScript } from "workaround";

export default {
  name: "app",
  components: {
    HelloWorld,
  },
  data: () => ({
    csInterface: null,
  }),
  mounted() {
    this.csInterface = new CSInterface(); // NOTE: This will not work in DEVELOPER under CORS with Adobe apps newer than AUG2021
    // For a universal solution, use the evalScript method from the package named "workaround":

    // You'll need to install and import { evalScript } from "workaround" for the below:
    // let runScript = evalScript(
    //   `(function() { alert("Hello world"); return true } ())`
    // ).then((result) => {
    //   console.log(result);
    // });

    // For theme handling and UI changes:
    starlette.init();
  },
  methods: {
    dispatchEvent(name, data) {
      var event = new CSEvent(name, "APPLICATION");
      event.data = data;
      this.csInterface.dispatchEvent(event);
    },
    async loadScript(path) {
      return await evalScript(`$.evalFile('${path}')`);
    },
  },
};
</script>

<style>
/* Various helper styles to match application theme */
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
