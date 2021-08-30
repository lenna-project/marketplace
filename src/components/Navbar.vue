<template>
  <div class="navbar">
    <a href="/">Home</a>
    <router-link to="/marketplace">Marketplace</router-link>
    <a href="/about">About</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navbar",
});
</script>
<style scoped lang="scss">
@import "@/styles/_variables.scss";

$navbar_padding: 40px;

.navbar {
  padding: $navbar_padding;
  position: fixed;
  top: 0;
  width: calc(100% - 2 * #{$navbar_padding});
  height: 40px;
  margin: 0;
  overflow: hidden;
  background-color: $nav_background;
  justify-content: flex-end;
  display: flex;
  color: $text_color;
  text-transform: uppercase;
}

.navbar a {
  display: block;
  color: $text_color;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.navbar a:hover {
  background-color: $primary_color;
}
.navbar .router-link-active {
  color: white;
  background-color: $primary_color;
}
</style>
