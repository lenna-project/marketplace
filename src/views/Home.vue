<template>
  <div class="main"></div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Home",
  components: {},
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
