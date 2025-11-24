<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keywords"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "MySearch",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("updateList", [], false, true, "");
      axios.get(`https://api.github.com/search/users?q=${this.keywords}`).then(
        (response) => {
          //   console.log("ok", response.data);
          this.$bus.$emit("updateList", response.data.items, false, false, "");
        },
        (error) => {
          console.log(error);
          this.$bus.$emit("updateList", [], false, false, error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>