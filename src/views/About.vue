<template>
  <div class="abt-container">
    <div class="abt-content">
      <h3>intent</h3>
      <p>i actually use site for having background video (visual stimulation if you will) or when i'm on shrooms with buddies.</p>
      <p>most of the time i let music play in the background (that feature will also come in the future).</p>
      <p>
        if you lurk weird websites you might find trashTV kinda familiar.. cause it is a clone of
        <a href="https://archillect.com/tv">archillect.com/tv</a>
      </p>
      <p>i want to create a own mod of this page tho.. so its just a cheap rip off <span style="font-style: italic;">for now</span> ^^</p>
    </div>
    <footer><a href="https://github.com/IronicUsername/trashtv/releases" target="_blank">v. {{app_version}}</a></footer>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    app_version: process.env.VUE_APP_VERSION,
  }),
}
</script>

<style lang="scss" scoped>
.abt-container{
  display: flex;
  flex: 1;

  &>footer{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 10px;
    font-size: .75rem;

    &>a{
      text-decoration: none;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>
