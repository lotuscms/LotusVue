<template>
  <div class="wrapper">
    <parallax
      class="page-header header-filter"
      parallax-active="false"
      :style="headerStyle"
    >
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-80 md-small-size-100 mx-auto text-center"
          >
            <md-card class="md-card md-card-signup">
              <md-card-content>
                <h2 class="card-title text-center">Register</h2>
                <div class="md-layout">
                  <div
                    class="md-layout-item md-size-70 md-medium-size-80 md-small-size-100 center-input"
                  >
                    <form>
                      <md-field
                        class="md-form-group"
                        v-for="item in inputs"
                        :key="item.name"
                      >
                        <md-icon>{{ item.icon }}</md-icon>
                        <label>{{ item.name }}</label>
                        <md-input
                          :v-model="item.nameAttr"
                          :type="item.type"
                          autocomplete="current-password"
                        ></md-input>
                      </md-field>
                      <md-checkbox v-model="boolean">
                        I agree to the
                        <a>terms and conditions</a>.
                      </md-checkbox>
                      <div class="button-container justify-content-center">
                        <md-button
                          href="javascript:void(0)"
                          class="md-success md-round mt-3"
                          >Register</md-button
                        >
                      </div>
                    </form>
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container flex-direction-row">
          <nav>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
            </ul>
          </nav>
          <div class="copyright">&copy; {{ year }}, LotusCMS</div>
        </div>
      </footer>
    </parallax>
  </div>
</template>

<script>
import Mixins from '@/plugins/basicMixins';

export default {
  components: {},
  mixins: [Mixins.HeaderImage],
  bodyClass: 'signup-page',
  data() {
    return {
      boolean: null,
      image: require('@/assets/img/bg-header-2.jpg'),
      year: new Date().getFullYear(),
      inputs: [
        {
          icon: 'account_circle',
          name: 'Username...',
          nameAttr: 'username',
          type: 'text'
        },
        {
          icon: 'email',
          name: 'Email...',
          nameAttr: 'email',
          type: 'email'
        },

        {
          icon: 'lock_outline',
          name: 'Password..',
          nameAttr: 'password',
          type: 'password'
        },
        {
          icon: 'lock_outline',
          name: 'Confirm Password..',
          nameAttr: 'confirmPassword',
          type: 'password'
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.center-input {
  margin: auto;
}
</style>
