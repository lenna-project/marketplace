<template>
  <div class="plugin" v-if="plugin">
    <div style="display: flex; justify-content: space-between;">
    <h1>{{ plugin.name }} 
    <button v-on:click="addPlugin(plugin)">add plugin</button></h1>
    {{plugin.author}}
    </div>
        <div style="display: flex; justify-content: space-between;">
          <p>
            {{ plugin.description }}
          </p>
          <a v-bind:href="plugin.homepage">Homepage</a>
    </div>
    
  </div>
</template>

<script>
import { addPlugin } from "../config";
import { useToast } from "vue-toastification";

export default {
  name: "Plugin",
  props: {
    plugin: Object,
  },
  data() {
    return {};
  },
  methods: {
    addPlugin(plugin) {
      const toast = useToast();
      console.log("plugin added: ", plugin.name);
      addPlugin(plugin.url);
      toast.success(`Plugin ${plugin.name} available now.`);
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
