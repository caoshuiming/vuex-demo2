<template>
  <div id="app">
    <p>{{ $store.state.name }} | {{ indexSuffix }}</p>
    <p>{{ $store.state.a.name }} | {{ ASuffix }}</p>
    <p>{{ $store.state.b.name }} | {{ BSuffix }}</p>
    <!--如果开启命名空间，则只改index-->
    <button @click="$store.commit('changeName')">改名</button>
    <br>
    <button @click="$store.commit('a/changeName')">改名A</button>
    <br>
    <button @click="$store.commit('b/changeName')">改名B</button>
    <br>
    <button @click="$store.dispatch('changeNameTimeOut')">延时改名</button>
    <br>
    <button @click="$store.dispatch('a/changeNameTimeOut')">延时改名A</button>
    <br>
    <button @click="$store.dispatch('b/changeNameTimeOut')">延时改名B</button>
  </div>
</template>

<script>

export default {
  name: "App",
  computed:{
    indexSuffix(){
      return this.$store.getters.addSuffix;
    },
    ASuffix(){
      return this.$store.getters["a/addSuffix"];
    },
    BSuffix(){
      return this.$store.getters["b/addSuffix"];
    }
  }
};
</script>

<style>
</style>
