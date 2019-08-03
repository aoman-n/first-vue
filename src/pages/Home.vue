<script>
  import Header from '../components/Header';

  export default {
    components: { Header }
  }
</script>

<template>
  <div>
    <Header />
    <h2>hello home</h2>
    <router-link to="/count">Go Counter page</router-link>
  </div>
</template>

<style scoped>
</style>