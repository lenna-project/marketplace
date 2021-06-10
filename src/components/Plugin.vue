<template>
  <div class="plugin" v-if="plugin">
    <div style="display: flex; justify-content: space-between">
      <h1>
        {{ plugin.name }}
        <button v-on:click="addPlugin(plugin)">add plugin</button>
      </h1>
      {{ plugin.author }}
    </div>
    <div>
      <img id="icon" v-if="icon" :src="icon" />
    </div>
    <div style="display: flex; justify-content: space-between">
      <p>
        {{ plugin.description }}
      </p>
      <a v-bind:href="plugin.homepage">Homepage</a>
    </div>
  </div>
</template>

<script>
import { addPlugin } from "../config";
import { useToast, POSITION } from "vue-toastification";

export default {
  name: "Plugin",
  props: {
    plugin: Object,
  },
  data() {
    return {
      icon: null,
    };
  },
  methods: {
    addPlugin(plugin) {
      const toast = useToast();
      console.log("plugin added: ", plugin.name);
      addPlugin(plugin.url);
      toast.success(`Plugin ${plugin.name} available now.`, {
        position: POSITION.TOP_LEFT,
      });
    },
    async loadIcon() {
      if (this.plugin.url) {
        System.import(this.plugin.url)
          .then((module) => {
            module.get("default").then((plugin) => {
              let m = plugin();
              if (m.icon) {
                this.icon = m.icon();
              }
            });
          })
          .catch((e) => console.log(e));
      }
    },
  },
  created() {
    this.loadIcon();
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";
.plugin {
  margin: 10px;
  padding: 5px;
  min-width: 250px;
  min-height: 250px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 5px $shadow;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#icon {
  height: 96px;
}
</style>
