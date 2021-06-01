<template>
  <div
    id="app"
    class="overlay crt"
    ref="app"
  >
    <Background
      :fullscreen="$isFullscreen || $isLightscreen"
      :bg="background"
      :fg="foreground"
    />

    <template v-if="!$isFullscreen && !$isLightscreen">
      <Content>
        <div class="page-title">
          <h2>
            <router-link :to="{name: 'Home'}">></router-link>{{contentTitle}}
          </h2>
        </div>

        <transition name="component-flicker" mode="out-in">
          <router-view class="component-view"/>
        </transition>
      </Content>

      <div class="id-container">
        <a :href="`https://archillect.com/${gId}`" target="_blank">#{{gId}}</a>
      </div>
    </template>
  </div>
</template>

<script>
import Background from '@/components/Background'
import Content from '@/components/Content'

import fullscreen from '@/mixins/fullscreen'
import { site } from '@/assets/settings'

export default {
  name: 'TrashTV',
  mixins: [fullscreen],
  components: {
    Background,
    Content,
  },
  data: () => ({
    ignoredSiteTitles: ['/', '/page-not-found'],
    background: null,
    foreground: null,
    gId: null,
  }),
  computed: {
    contentTitle(){
      if(this.ignoredSiteTitles.indexOf(this.$route.path) >= 0) return '~'
      return `/${this.$route.name.toLowerCase()}`
    },
  },
  methods: {
    setPageTitle(toRoute){
      return toRoute.name ? toRoute.name.toLowerCase() + ' :|: ' + site.name : site.name;
    },
    async setBkg(){
      let data = {}
      await this.$axios.get('/getTV')
        .then(r => {
          data = r.data
        })
        .catch(e => {
          console.error(e)
        })

      this.background = data.screenbg
      this.foreground = data.screenfg
      this.gId = data.gifid

      setTimeout(() => {
        this.background = data.buffer
        this.foreground = data.buffer
        this.gId = data.gifid_buffer
      }, 5000)
    },
  },
  mounted(){
    setInterval(() => {
      this.setBkg()
    }, 10000)
  },
  watch:{
    $route(to){
      document.title = this.setPageTitle(to)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/animation/crt';
@import '~@/assets/scss/animation/crt-transition.scss';

#app{
  &>div{
    margin: auto;
    z-index: 1;
  }
}

.overlay{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &>.id-container{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 25px;

    &>a{
      color: white;
      text-decoration: none;
    }
  }
}

.component-view{
  height: 100%;
  overflow: auto;
  border-right: 1px solid $red;
  padding-right: 15px;
}

.page-title{
  display: inline-flex;
  padding-bottom: 5px;

  &>h2 {
    color: #fff;
    margin: 0;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 10px solid white; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    animation: blink-caret 1s step-end infinite;

    &>a{
      text-decoration: none;
      position: relative;
      transition: all .2s ease-in-out;

      &:hover{
        color: grey;

        &::after{
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0px;
          width: 100%;
          height: 4px;
          background-color: grey;
        }
      }
    }
  }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white }
}
</style>
