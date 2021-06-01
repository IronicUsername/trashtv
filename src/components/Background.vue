<template>
  <div
    class="background-container"
    :style="`width: ${gifAttrib.width};height: ${gifAttrib.height};`"
  >
    <div
      class="bg-container"
      :style="`background-image: url('${bg}');
               visibility:${gifAttrib.visibility};`"
    />
    <div
      class="fg-container"
      :style="`background-image: url('${fg}')`"
    />
  </div>
</template>

<script>
export default {
  name: 'Background',
  props:{
    fullscreen: {
      type: Boolean,
      default: false,
      required: true,
    },
    bg: {
      type: String,
      default: '',
      required: true,
    },
    fg: {
      type: String,
      default: '',
      required: true,
    },
  },
  data: () => ({
    apiResponse: null,
    width: '60%',
    height: '65%',
    visibility: 'hidden',
  }),
  computed: {
    gifAttrib(){
      let w = this.fullscreen ? '100%' : '60%'
      let h = this.fullscreen ? '100%' : '65%'
      let v = this.fullscreen ? 'visible' : 'hidden'
      return {
        width: w,
        height: h,
        visibility: v,
      }
    }
  },
  methods: {
    getData(){
      console.log('now')
      const url = 'getTV'
      this.$api
        .get(url)
        .then(response => {
          this.apiResponse = response.data;
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.background-container{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: 75%;
  min-width: 360px;
  border: 0;
  transform: translate(-50%, -50%);
  transition: all .2s ease-in-out;

  &>div{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background-repeat: no-repeat;
    background-position: center;
  }

  &>.bg-container{
    background-size: cover;
  }

  &>.fg-container{
    background-size: contain;
  }
}
</style>
