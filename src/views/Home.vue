<template>
  <div class="home">
    <h2>hi.</h2>
    <div>
      <a @click="$toggleLightscreen()">go relax mode <i>light</i></a>
      <a @click="$toggleFullscreen()">go <b>FULL</b> relax mode</a>
    </div>
  </div>
</template>

<script>
import fullscreen from '@/mixins/fullscreen'

export default {
  name: 'Home',
  mixins: [fullscreen]
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

    &>a{
      margin: 10px 0;
      &:nth-child(2){
        margin-left: auto;
      }

      &:hover{
        cursor: pointer;
      }

      &::after{
        content: '.';
      }
    }
  }
}
</style>
