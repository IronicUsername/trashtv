<template>
  <div>
    <div>
      <p>d.t.</p>
      <p>lichtstrasse 25</p>
      <p>50969 cologne, germany</p>
    </div>
    <p>e-mail: <span class="reverse">oi.ymonoce-hsart@em</span></p>
  </div>
</template>

<script>
export default {
  name: 'Imprint',
}
</script>

<style lang="scss">
.reverse{
  unicode-bidi: bidi-override;
  direction: rtl;
}
</style>
