<template>
  <div class="home">
    <h2>hi.</h2>
    <div>
      <span>go relax mode <i>light</i></span>
      <span @click="toggleFullscreen()">go <b>FULL</b> relax mode</span>
    </div>
  </div>
</template>

<script>
import controll from '@/mixins/controlls'

export default {
  name: 'Home',
  mixins: [controll],
}
</script>

<style lang="scss" scoped>
.home{
  display: flex;
  flex-direction: column;

  &>h2{
    margin: 0 auto;
    padding: 15px;
  }

  &>div{
    display: flex;
    flex-direction: column;
    text-decoration: underline;

    &>span{
      margin: 10px 0;
      &:nth-child(2){
        margin-left: auto;
      }

      &::after{
        content: '.';
      }
    }
  }
}
</style>
