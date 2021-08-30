<template>
  <div class="plugins-manager">
    <div class="plugins">
      <div
        class="list-group-item"
        v-for="item in filteredPlugins()"
        :key="item.url"
      >
        <Plugin :plugin="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Plugin from "./Plugin.vue";

interface LennaPlugin {
    name: string;
    description: string;
    url?: string;
    icon?: string;
}

declare interface PluginsManagerData {
  plugins: LennaPlugin[];
}

export default defineComponent({
  name: "PluginsManager",
  props: {
    pluginsjson: String,
    search: {
      type: String,
      required: true
    },
  },
  components: {
    Plugin,
  },
  data(): PluginsManagerData {
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
    filteredPlugins() {
      return this.plugins.filter((plugin) => {
        return (
          plugin.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
          plugin.description.toLowerCase().indexOf(this.search.toLowerCase()) !=
            -1
        );
      });
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/_variables.scss";
.plugins-manager {
  background-color: $body_background;
}
.plugins {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
