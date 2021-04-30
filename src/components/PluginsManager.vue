<template>
  <div class="plugins-manager">
    <div class="list-group-item" v-for="item in plugins" :key="item.url">
      <Plugin :plugin="item" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Plugin from "@/components/Plugin.vue";

export default defineComponent({
  name: "PluginsManager",
  props: {
    pluginsjson: String,
  },
  components: {
    Plugin,
  },
  data() {
    return {
      plugins: [],
    };
  },
  beforeMount() {
    try {
      this.getPluginsjson();
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async getPluginsjson() {
      if (this.pluginsjson) {
        console.log(this.pluginsjson);
        await fetch(this.pluginsjson)
          .then((res) => res.json())
          .then((data) => {
            for (const plugin of data) {
              console.log(plugin);
              this.plugins.push(plugin);
            }
          })
          .catch(console.log);
      }
    },
  },
});
</script>

<style>
.plugins-manager {
  margin: 10px;
  background-color: #e1b5a2;
  border: 1px solid darkgray;
  border-radius: 5px;
  box-shadow: 10px 5px 5px white;
}
</style>
