import keys from '@/assets/settings/keyMapping'

export default {
  methods:{
    controllKeyCheck(lol){
      var keyPressed = lol.event.keyCode
      var ctrlPressed = lol.event.ctrlKey

      switch(keyPressed){
        case keys.space:
          if(ctrlPressed){
            console.log('TOGGLE FULLSCREEN MODE EXTREME')
            break
          }
          console.log('TOGGLE FULLSCREEN MODE LIGHT')
          break
        case keys.esc:
          console.log('EXIT FULLSCREEN')
      }
    }
  }
}
