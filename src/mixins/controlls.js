import keys from '@/assets/settings/keyMapping'

export default {
  data: () => ({
    isFullscreen: false,
    isFullscreenExtreme: false,
  }),
  methods:{
    controllKeyCheck(lol){
      var keyPressed = lol.event.keyCode
      var ctrlPressed = lol.event.ctrlKey

      switch(keyPressed){
        case keys.space:
          if(ctrlPressed){
            console.log('TOGGLE FULLSCREEN MODE EXTREME')
            this.toggleFullscreenExtreme()
            break
          }
          console.log('TOGGLE FULLSCREEN MODE LIGHT')
          this.toggleFullscreen()
          break
        case keys.esc:
          console.log('EXIT FULLSCREEN')
          this.exitFullscreen()
      }
    },
    toggleFullscreen(){
      this.isFullscreen = this.isFullscreen ? false : true
      localStorage.setItem('bkgState', this.isFullscreen);
      // this.$router.push({name: 'Home'}).catch(()=>{})
    },
    toggleFullscreenExtreme() {
      this.$fullscreen.toggle(this.$refs.app, {
        wrap: false,
        callback: this.toggle
      })

      if(this.isFullscreen) this.toggleFullscreen()
    },
    exitFullscreen(){
      this.isFullscreen = false
    },
    toggle(fullscreen){
      if(fullscreen && !this.isFullscreen) this.toggleFullscreen()
      this.isFullscreenExtreme = fullscreen
    }
  },
}
