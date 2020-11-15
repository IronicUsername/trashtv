<template>
  <div class="not-found-container">
    <h2>404</h2>
    <div class="not-found-content">
      <span>nothing here...</span>
      <router-link :to="{name: 'Home'}">go back</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found{
  &-container{
    &>h2{
      text-align: center;
    }
  }

  &-content{
    display: flex;
    flex-flow: column;
  }

}

</style>
