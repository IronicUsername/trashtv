<template>
  <div
    id="app"
    class="overlay crt"
    ref="app"
  >
    <Background :fullscreen="isFullscreen"/>

    <template v-if="!isFullscreen">
      <Content>
        <div class="page-title">
          <h2><router-link :to="{name: 'Home'}">></router-link>{{contentTitle}}</h2>
        </div>

        <transition name="component-flicker" mode="out-in">
          <router-view class="component-view"/>
        </transition>
      </Content>

      <div class="id-container">
        <a>#1234</a>
      </div>
    </template>

    <Keypress key-event="keydown" @success="controllKeyCheck"/>
  </div>
</template>

<script>
import Background from '@/components/Background'
import Content from '@/components/Content'
import controll from '@/mixins/controlls'
import { site } from '@/assets/settings'

export default {
  name: 'TrashTV',
  components: {
    Background,
    Content,
    Keypress: () => import('vue-keypress'),
  },
  mixins: [
    controll,
  ],
  data: () => ({
    res: null,
    ignoredSiteTitles: ['/', '/page-not-found'],
  }),
  computed: {
    contentTitle(){
      if(this.ignoredSiteTitles.indexOf(this.$route.path) >= 0) return '~'
      return `.${this.$route.name.toLowerCase()}`
    },
  },
  methods: {
    setPageTitle(toRoute){
      return toRoute.name ? toRoute.name.toLowerCase() + ' :|: ' + site.name : site.name;
    },
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
  background-color: black;

  &>div{
    margin: auto;
    z-index: 1;
  }
}

.overlay{
  position: fixed;
  width: 100%;
  height: 100%;
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
