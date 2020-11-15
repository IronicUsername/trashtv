<template>
  <div id="content-container">
    <div class="content">
      <div
        class="content-box-before"
        @click="selectBlue()"
      >
        <div>
          <router-link :to="{name: 'Settings'}">settings.</router-link>
        </div>
      </div>

      <slot/>

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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  data: () => ({
    menuBefore: [{to: 'About'},{to: 'Imprint'},{to: 'Settings'}]
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
@import '~@/assets/scss/colors.scss';
$menu-distance: -15px;
$menu-distance-x-hover: -100px;

#content-container{
  position: relative;
  display: flex;
  background-color: black;
  padding: 30px;
  z-index: 1;

  &>.content{
    min-width: 250px;
    max-width: 500px;
    min-height: 250px;
    max-height: 500px;
    overflow-x: hidden;

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

      &:hover{
        width: 90%;
        height: 90%;
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
              animation: strickeForward .3s cubic-bezier(0.22, 0.61, 0.36, 1);
            }
          }
        }
      }
    }

    &>.content-box-before{
      background-color: $blue;
      top: $menu-distance;
      right: $menu-distance;

      &:hover{
        top: $menu-distance;
        right: $menu-distance-x-hover;
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

      &:hover{
        bottom: $menu-distance;
        left: $menu-distance-x-hover;
      }

      &>div{
        margin-left: 25px;

        &>a.router-link-exact-active{
          &::after{
            background-color: $blue;
          }
        }
      }
    }
  }

  &>.content{
    padding: 24px;
    background-color: black;
    color: white;
  }
}

@keyframes strickeForward {
  0% {width: 0%}
  100% {width:100%}
}
</style>
