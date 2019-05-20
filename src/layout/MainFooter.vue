<template>
  <footer
    class="footer"
    :class="{
      [`footer-${type}`]: type,
      [`footer-${size}`]: size
    }"
    :data-background-color="backgroundColor"
  >
    <template>
      <div class="container flex-direction-row">
        <a class="footer-brand" href="#">LotusCMS</a>
        <ul>
          <router-link tag="li" :to="{ name: 'home' }">
            <a>Home</a>
          </router-link>
          <li>
            <a href="javascript:void(0)">About Us</a>
          </li>
          <li>
            <a href="javascript:void(0)">Blog</a>
          </li>
          <li>
            <a href="javascript:void(0)">Licenses</a>
          </li>
        </ul>

        <ul class="social-buttons">
          <li>
            <md-button
              href="https://twitter.com/CreativeTim"
              target="_blank"
              class="md-twitter md-just-icon md-simple"
            >
              <i class="fab fa-twitter"></i>
            </md-button>
          </li>
          <li>
            <md-button
              href="https://dribbble.com/creativetim"
              target="_blank"
              class="md-dribbble md-just-icon md-simple"
            >
              <i class="fab fa-dribbble"></i>
            </md-button>
          </li>
          <li>
            <md-button
              href="https://www.instagram.com/CreativeTimOfficial"
              target="_blank"
              class="md-instagram md-just-icon md-simple"
            >
              <i class="fab fa-instagram"></i>
            </md-button>
          </li>
        </ul>
      </div>
    </template>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
    size: String
  },
  data() {
    return {
      year: new Date().getFullYear(),
      img1: require('@/assets/img/faces/card-profile6-square.jpg'),
      img2: require('@/assets/img/faces/christian.jpg'),
      img3: require('@/assets/img/faces/card-profile4-square.jpg'),
      img4: require('@/assets/img/faces/card-profile1-square.jpg'),
      img5: require('@/assets/img/faces/marc.jpg'),
      img6: require('@/assets/img/faces/kendall.jpg'),
      img7: require('@/assets/img/faces/card-profile5-square.jpg'),
      img8: require('@/assets/img/faces/card-profile2-square.jpg')
    };
  }
};
</script>
<style></style>
