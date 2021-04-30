<template>
  <div class="plugin" v-if="plugin">
    <h1>{{ plugin.name }} 
    <button v-on:click="addPlugin(plugin.url)">add plugin</button></h1>
    {{ plugin.description }}
  </div>
</template>

<script>
import { addPlugin } from "../config";

export default {
  name: "Plugin",
  props: {
    plugin: Object,
  },
  data() {
    return {};
  },
  methods: {
    addPlugin(pluginUrl) {
      console.log("plugin added: ", pluginUrl);
      addPlugin(pluginUrl);
    },
  }
};
</script>

<style scoped>
.plugin {
  margin: 10px;
  width: 500px;
  background-color: #efcda4;
  border: 1px solid darkgray;
  border-radius: 5px;
}
</style>
