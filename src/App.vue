<template>
  <div id="app" class="overlay crt">
    <Background/>

    <Content>
      <div class="page-title">
        <h2>
          <router-link :to="{name: 'Home'}">></router-link>
          {{contentTitle}}
        </h2>
      </div>

      <transition name="component-flicker" mode="out-in">
        <router-view/>
      </transition>
    </Content>

    <div class="id-container">
      <a href="">#1234</a>
    </div>
  </div>
</template>

<script>
import Background from '@/components/Background'
import Content from '@/components/Content'
import { site } from '@/assets/settings'

export default {
  components: {
    Background,
    Content,
  },
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
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/animations/crt';
@import '~@/assets/scss/animations/crt-transition.scss';

#app{
  background-color: black;

  &>div{
    margin: auto;
    z-index: 1;
  }
}

.overlay{
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &>.page-title{
    display: inline-block;

    &>h2 {
      color: #fff;
      margin: 0;
      overflow: hidden; /* Ensures the content is not revealed until the animation */
      border-right: 10px solid white; /* The typwriter cursor */
      white-space: nowrap; /* Keeps the content on a single line */
      animation: blink-caret 1s step-end infinite;
    }
  }

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


@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: white }
}
</style>
