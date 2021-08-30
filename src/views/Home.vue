<template>
  <div class="main">
    <div class="top">
      <div></div>
      <h1>Marketplace</h1>
      <div class="searchbar">
        <input type="text" placeholder="Search..." v-model="search" />
      </div>
    </div>
    <PluginsManager pluginsjson="plugins.json" :search="search" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PluginsManager from "../components/PluginsManager.vue";

export default defineComponent({
  name: "Home",
  components: {
    PluginsManager,
  },
  data() {
    return {
      search: "",
    };
  },
});
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";
@import url("https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap");
.main {
  background-color: $body_background;
  padding: 150px;
  padding-top: 120px;
  text-align: center;
}
.top {
  display: flex;
  justify-content: space-between;
}
.main h1 {
  text-transform: uppercase;
  font-family: "Amatic SC", cursive;
  font-size: 32pt;
}
.searchbar {
  padding-top: 40px;
}
.searchbar input[type=text] {
  font-size: 20pt;
  color: black;
  border: 1px solid black;
  border-radius: 6px;
  transition: width 0.4s ease-in-out;
  width: 60%;
}
.searchbar input::placeholder {
  color: black;
  position: absolute;
  left: 30%;
}
.searchbar input[type=text]:focus {
  width: 100%;
  transform: scale(1.5);
}
.main button {
  width: 350px;
  font-size: 24pt;
  padding: 10px;
}
</style>
