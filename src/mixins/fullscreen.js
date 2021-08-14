export default {
  mounted(){
    addEventListener('keydown', this.onKeyPress)
  },
  beforeDestroy(){
    removeEventListener('keydown', this.onKeyPress)
  },
  methods: {
    onKeyPress(e){
      const keyCode = e.code
      const states = {
        alt: e.altKey,
        ctrl: e.ctrlKey,
        meta: e.metaKey,
        shift: e.shiftKey
      }
      console.log('das ist ein test')
      switch(keyCode){
        case 'Space':
          if(states.ctrl){
            this.$toggleFullscreen(!this.$isFullscreen)
            break
          }

          if(!this.$isFullscreen){
            this.$toggleLightscreen()
            break
          }
          break
        case 'Escape':
          if(this.$isLightscreen){
            this.$toggleLightscreen()
          } else if(this.$isFullscreen){
            this.$toggleFullscreen(false)
          }
          break
        case 'KeyS':
          var win = open(this.$apiData.screenbg, '_blank')
          win ? win.focus() : alert('allow opening popup windows if you want to use this function')
          break
        case 'KeyL':
          open(`https://archillect.com/${this.$apiData.gifid}`, '_blank').focus()
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
