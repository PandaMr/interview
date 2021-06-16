<template>
  <div class="container">
    <!-- <input type="text"  /> -->
    <p>{{ data.a }}</p>
    <input type="text" v-model="data.a" />
    <h3>{{ $store.state.count }}</h3>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        a: "pandaMr",
        b: "hello",
      },
    };
  },
};
</script>

<style>
</style>