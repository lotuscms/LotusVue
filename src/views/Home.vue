<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      parallax-active="true"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <!-- Dynamic title from the database -->
            <h1 class="title">Server Name Here</h1>
            <h4>
              Some desciription about your server should go here for display. It
              could include level cap, rates, expansion, custom content and any
              other information that you deem necessary to highlight your wow
              server.
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from '@/plugins/basicMixins';

export default {
  name: 'AppLanding',
  mixins: [Mixins.HeaderImage],
  components: {},
  bodyClass: 'landing-page',
  data() {
    return {
      image: require('@/assets/img/bg-header-2.jpg')
    };
  }
};
</script>

<style lang="scss" scoped></style>
