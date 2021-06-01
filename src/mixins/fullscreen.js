export default {
  mounted(){
    addEventListener('keydown', this.checkKey)
  },
  beforeDestroy(){
    removeEventListener('keydown', this.checkKey)
  },
  methods: {
    checkKey(event){
      const keyCode = event.code
      const states = {
        alt: event.altKey,
        ctrl: event.ctrlKey,
        meta: event.metaKey,
        shift: event.shiftKey,
      }

      switch(keyCode){
        case 'Space':
          states.shift ? this.$toggleFullscreen() : this.$toggleLightscreen()
          break
        case 'Escape':
          if(this.$isLightscreen) this.$toggleLightscreen()
          break
        default: break
      }
    },
    $toggleFullscreen(){
      this.$fullscreen.toggle(this.$refs.app, {wrap: false, callback: this.fullscreenChange})
    },
    fullscreenChange(fullscreen){
      this.$isFullscreen = fullscreen
    },
    $toggleLightscreen(){
      if(this.$isFullscreen) this.$toggleFullscreen()
      this.$isLightscreen = !this.$isLightscreen
    }
  },
}
