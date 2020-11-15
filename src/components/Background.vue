<template>
  <div class="background-container">
    <div
      class="bg-container"
      style="background-image: url('https://66.media.tumblr.com/c4363095b816201250590f9b461db3fa/tumblr_mvpe9zgBbz1szjg4fo1_500.gif')"
    />
    <div
      class="fg-container"
      style="background-image: url('https://66.media.tumblr.com/c4363095b816201250590f9b461db3fa/tumblr_mvpe9zgBbz1szjg4fo1_500.gif')"
    />
  </div>
</template>

<script>
export default {
  name: 'Background',
  data: () => ({
    apiResponse: null,
  }),
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
