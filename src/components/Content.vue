<template>
  <div id="content-container">
    <div
      class="content-box-before"
      @click="selectBlue()"
    >
      <div>
        <router-link :to="{name: 'Settings'}">settings.</router-link>
      </div>
    </div>

    <div class="content">
      <slot/>
    </div>

    <div
      class="content-box-after"
      @click="selectRed()"
    >
      <div>
        <router-link :to="{name: 'About'}">.about</router-link>
      </div>

      <div>
        <router-link :to="{name: 'Imprint'}">.imprint</router-link>
      </div>
    </div>
    <footer><a href="https://github.com/IronicUsername/trashtv/releases" target="_blank">v. {{app_version}}</a></footer>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data: () => ({
    menuBefore: [{to: 'About'},{to: 'Imprint'},{to: 'Settings'}],
    app_version: process.env.VUE_APP_VERSION,
  }),
  methods: {
    selectRed(){
      console.log('clicked red')
    },
    selectBlue(){
      console.log('clicked blue')
    },
  },
}
</script>

<style lang="scss" scoped>
$menu-distance: -15px;
$menu-distance-x-hover: -100px;

#content-container{
  position: relative;
  display: flex;
  background-color: black;
  padding: 30px;
  z-index: 1;

  &>.content-box-before,
  &>.content-box-after{
    width: 85%;
    height: 85%;
    max-height: 250px;
    position: absolute;
    display: flex;
    flex-direction: column;
    padding: -$menu-distance 0;
    z-index: -1;
    transition: .1s all ease;

    @include respond-to(small) {
      width: 100%;
      height: 50%;
    };

    &:hover{
      width: 90%;
      height: 90%;

      @include respond-to(small) {
        width: 100%;
        height: 45%;
      };
    }

    &>div{
      flex: auto;
      display: flex;

      &>a{
        text-decoration: none;
        margin: auto 10px;
        position: relative;
        transition: .1s all ease;

        &.router-link-exact-active{
          &:hover{
            cursor: default;
          }

          &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            top: 50%;
            left: 0;
            animation: strickeForward .1s cubic-bezier(0.22, 0.61, 0.36, 1);
          }
        }
      }
    }
  }

  &>.content-box-before{
    background-color: $blue;
    top: $menu-distance;
    right: $menu-distance;

    @include respond-to(small) {
      left: 0;
    };

    &:hover{
      top: $menu-distance;
      right: $menu-distance-x-hover;

      @include respond-to(small) {
        top: -75px;
        right: 0;
      };
    }

    &>div{
      justify-content: flex-end;
      margin-right: 25px;

      &>a.router-link-exact-active{

        &::after{
          background-color: $red;
        }
      }
    }
  }

  &>.content-box-after{
    background-color: $red;
    bottom: $menu-distance;
    left: $menu-distance;

    @include respond-to(small) {
      left: 0;
      flex-direction: row;
    };

    &:hover{
      bottom: $menu-distance;
      left: $menu-distance-x-hover;

      @include respond-to(small) {
        bottom: -75px;
        left: 0;
      };
    }

    &>div{
      margin-left: 25px;

      @include respond-to(small) {
        transform: rotate(-90deg);
        width: 100%;
        margin: 0;
      };

      &>a.router-link-exact-active{
        @include respond-to(small) {
          margin: auto;
          // margin-left: 10px;
        };
        &::after{
          background-color: $blue;
        }
      }
    }
  }

  &>.content{
    min-width: 250px;
    max-width: 460px;
    min-height: 250px;
    max-height: 360px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 24px;
    background-color: black;
    color: white;
  }

  &>footer{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px 5px;
    font-size: .75rem;

    &>a{
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}

@keyframes strickeForward {
  0% {width: 0%}
  100% {width:100%}
}
</style>
