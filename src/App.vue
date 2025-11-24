<template>
  <div class="container">
    <Search />
    <List />
  </div>
</template>

<script>
import List from "./components/list.vue";
import Search from "./components/search.vue";
export default {
  name: "App",
  components: {
    List,
    Search,
  },
};
</script>

