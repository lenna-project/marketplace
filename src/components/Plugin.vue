<template>
  <div class="plugin" v-if="plugin">
    <h1>{{ plugin.name }}</h1>
    {{ plugin.description }}
  </div>
</template>

<script>
export default {
  name: "Plugin",
  props: {
    plugin: Object,
  },
  data() {
    return {};
  },
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
