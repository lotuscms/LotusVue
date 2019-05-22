<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter header-small"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
            <h1 class="title">How to Connect</h1>
            <h4>Step by step on how to connect to our server.</h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center">
            <h1 class="title text-center"></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from '@/plugins/basicMixins';

export default {
  name: 'AppHowToConnect',
  mixins: [Mixins.HeaderImage],
  data() {
    return {
      image: require('@/assets/img/bfa-header-bg.jpg')
    };
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0px;
}
</style>


