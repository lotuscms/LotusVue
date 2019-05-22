<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <p slot="description" class="description"></p>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-button
                slot="footer"
                class="md-simple md-success md-lg"
                @click.prevent="login"
              >Login</md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from '@/components';
import Mixins from '@/plugins/basicMixins';

export default {
  mixins: [Mixins.HeaderImage],
  components: {
    LoginCard
  },
  bodyClass: 'login-page',
  data() {
    return {
      image: require('@/assets/img/bg-header-3.jpg'),
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      // TODO: Implement using GraphQL Login functionality
      console.log(
        'Login: ' + { email: this.email, password: this.password }.toString()
      );
    }
  }
};
</script>

<style lang="css"></style>
