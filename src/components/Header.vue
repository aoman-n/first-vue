<template>
  <header class="header">
    <router-link to="/"><h1>Vue Sample App</h1></router-link>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    height: 100px;
    width: 100%;
    background-color: skyblue;
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
    }

    h1 {
    margin-right: auto;
    font-size: 1.3em;
    color: #FFFFFF;
    text-shadow: 2px 2px 3px gray;
    padding: 0 40px;
    cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>