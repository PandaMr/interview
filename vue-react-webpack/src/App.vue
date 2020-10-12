<template>
  <div id="app">
    <SlotData > 
      <p slot="title">{{title}}</p>
      <a slot="title2" href="#">panda Mr</a>
      <!-- <template v-slot:default='child'>
        {{child.userData.first}}
      </template> -->
    </SlotData>

    <Base />
    <NextTick />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Base from './components/base.vue'
import NextTick from './components/nextTick'
import SlotData from './components/slot'

export default {
  name: 'App',
  components: {
    // HelloWorld
    Base,
    NextTick,
    SlotData
  },
  data(){
    return {
      title: 'parent title'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
