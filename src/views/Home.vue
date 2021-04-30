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
<style scoped lang="css">
.main {
  padding: 100px;
  display: flex;
  background-color: #5a0d33;
}
.main button {
  width: 350px;
  font-size: 24pt;
  padding: 10px;
}
</style>
