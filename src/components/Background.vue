<template>
  <div
    id="bg-container"
    :style="`width: ${cWidth}%;height: ${cHeight}%`"
  >
    <img
      id="bg"
      :src="imgUrl"
      :style="`visibility: ${fullscreen || lightscreen ? 'visible' : 'hidden'}`"
    />

    <img id="fg" :src="imgUrl" />
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    lightscreen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cWidth(){ return this.fullscreen || this.lightscreen ? '100' : '60' },
    cHeight(){ return this.fullscreen || this.lightscreen ? '100' : '65' }
  }
}
</script>

<style lang="scss" scoped>
#bg-container{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 75%;
  min-width: 360px;
  border: 0;
  transform: translate(-50%, -50%);
  transition: all .2s ease-in-out;

  &>img{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    border: hidden;
    background-repeat: no-repeat;
    background-position: center;
  }

  &>#bg{
    object-fit: cover;
  }

  &>#fg{
    object-fit: contain;
  }
}
</style>
