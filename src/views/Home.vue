<template>
  <div class="main">
    <PluginsManager
        pluginsjson="plugins.json"
      />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import PluginsManager from "@/components/PluginsManager.vue";

export default defineComponent({
  name: "Home",
  components: {
    PluginsManager
  },
  data() {
    return {};
  },
});
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";
.main {
  background-color: $body_background;
  padding: 150px;
  padding-top: 120px;
  text-align: center;
}
.main button {
  width: 350px;
  font-size: 24pt;
  padding: 10px;
}
</style>
