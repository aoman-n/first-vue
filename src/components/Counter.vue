<script>
  export default {
    data() {
      return {
        count: 100,
      }
    },
    methods: {
      increment() {
        this.count += 1
      },
      decrement() {
        this.count -= 1
      }
    }
  }
</script>

<template>
  <div>
    <button class="button" @click="increment">+</button>
    <span>{{ count }}</span>
    <button class="button" @click="decrement">-</button>
  </div>
</template>

<style lang="scss" scope>
  .button {
    padding: 10px 20px;
    border: 1px solid skyblue;
    cursor: pointer;
  }
</style>