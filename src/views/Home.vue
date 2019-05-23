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
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-small-size-100 mx-auto text-center"
            >
              <h2 class="title text-center">Server Status</h2>
              <!-- <h5 class="description">
              </h5>-->
            </div>
          </div>
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success" v-if="serverOnline">
                    <md-icon>check_circle</md-icon>
                  </div>
                  <div class="icon icon-danger" v-else>
                    <md-icon>cancel</md-icon>
                  </div>
                  <h4 class="info-title">
                    {{ serverOnline ? 'Online' : 'Offline' }}
                  </h4>
                  <p>Server Uptime: {{ serverUptime }}</p>
                </div>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>group</md-icon>
                  </div>
                  <h4 class="info-title">
                    Players Online: {{ totalPlayersOnline }}
                  </h4>
                  <p>
                    Alliance: {{ alliancePlayersOnline }} | Horde:
                    {{ hordePlayersOnline }}
                  </p>
                </div>
              </div>
              <div class="md-layout-item md-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-warning">
                    <md-icon>memory</md-icon>
                  </div>
                  <h4 class="info-title">Patch</h4>
                  <p v-for="(val, key) in patchVersions" :key="key">
                    {{ key.charAt(0).toUpperCase() + key.substring(1) }} Patch:
                    {{ val }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Recent News</h2>
          <div class="md-layout">
            <div
              class="md-layout-item md-size-50 md-small-size-100"
              v-for="post in blogPosts"
              :key="post.id"
            >
              <full-bg-card :card-image="post.img">
                <template slot="cardContent">
                  <h6 class="card-category text-info">{{ post.category }}</h6>
                  <a href="javascript:void(0)">
                    <h3 class="card-title">{{ post.title }}</h3>
                  </a>
                  <p class="card-description">{{ post.description }}</p>
                  <!-- Should be a router link to the specific post -->
                  <md-button
                    href="javascript:void(0)"
                    class="md-danger md-round"
                  >
                    <md-icon>format_align_left</md-icon>Read Article
                  </md-button>
                </template>
              </full-bg-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mixins from '@/plugins/basicMixins';
import { FullBgCard } from '@/components';

export default {
  name: 'AppLanding',
  mixins: [Mixins.HeaderImage],
  components: {
    FullBgCard
  },
  bodyClass: 'landing-page',
  data() {
    return {
      image: require('@/assets/img/bg-header-2.jpg'),
      serverOnline: false,
      serverUptime: '1d 2h 10m',
      totalPlayersOnline: 10,
      alliancePlayersOnline: 4,
      hordePlayersOnline: 6,
      patchVersions: {
        server: 'v1.0.0',
        launcher: 'v0.0.5'
      },
      blogPosts: [
        {
          id: 1,
          img: require('@/assets/img/examples/card-blog1.jpg'),
          title: 'Upcoming Races',
          description:
            'We have two new races coming to our server, complete with custom starting areas, quests, and ...',
          category: 'Development'
        },
        {
          id: 2,
          img: require('@/assets/img/examples/card-blog2.jpg'),
          title: 'Auction House Bot',
          description:
            'Our development team is currently hard at work implementing a fully working Auction ...',
          category: 'Development'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
