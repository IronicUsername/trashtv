<template>
  <div
    id="app"
    class="overlay crt"
    ref="app"
  >
    <Background
      :img-url="activeImg"
      :fullscreen="$isFullscreen"
      :lightscreen="$isLightscreen"
    />

    <Content v-if="!$isFullscreen && !$isLightscreen">
      <div class="page-title">
        <h2>
          <router-link :to="{name: 'Home'}">></router-link>{{contentTitle}}
        </h2>
      </div>

      <transition name="component-flicker" mode="out-in">
        <router-view class="component-view"/>
      </transition>
    </Content>

    <a v-if="!$isFullscreen && !$isLightscreen" id="img-id" target="_blank" :href="`https://archillect.com/${activeId}`">#{{ activeId }}</a>
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
    activeImg: '',
    activeId: '',

    gId: '',
  }),
  computed: {
    contentTitle(){
      if(this.ignoredSiteTitles.indexOf(this.$route.path) >= 0) return '~'
      return `/${this.$route.name.toLowerCase()}`
    },
  },
  mounted(){
    this.fetchAPI()
    window.setInterval(() => {
      this.fetchAPI()
    }, 10000)
  },
  beforeDestroy(){
    clearInterval(this.fetchAPI())
  },
  methods: {
    setPageTitle(toRoute){
      return toRoute.name ? toRoute.name.toLowerCase() + ' :|: ' + site.name : site.name;
    },
    async fetchAPI(){
      const ar = await this.$axios.get('getTV')
      this.$apiData = ar.data

      this.setImg(ar.data.screenbg, ar.data.gifid)
      setTimeout(x => {
        this.setImg(ar.data.buffer, ar.data.gifid_buffer)
        clearInterval(x)
      }, 5000)
    },
    setImg(url, id){
      Promise.all([
        this.activeImg = url,
        this.activeId = id
      ])
    }
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
  filter: brightness(125%);
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
#img-id{
  position: absolute;
  bottom: 0;
  left: 0;
  color: white;
  padding: 15px;
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white }
}
</style>
