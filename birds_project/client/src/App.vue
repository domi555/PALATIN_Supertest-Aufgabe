<template>
  <v-app>
    <v-app-bar app dark color="blue darken-3">
      <img src="@/assets/bird.png" class="me-2" style="height: 40px" />
      <v-toolbar-title class="text-uppercase">Bird Watch</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn to="/" class="blue darken-2 me-2">Home</v-btn>
      <v-btn to="/gallery" class="blue darken-2 me-2">Gallery</v-btn>
      <v-btn to="/about" class="blue darken-2">About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view :birds="birds" @observed="observedBird"
      /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      birds: [],
    };
  },

  async created() {
    await this.getBirds();
  },

  methods: {
    async getBirds() {
      try {
        const { data } = await axios({
          url: 'http://localhost:3000/birds',
          method: 'GET',
        });
        this.birds = data;
      } catch (e) {
        console.error(e);
      }
    },
    async observedBird({ id, name }) {
      try {
        await axios({
          url: `http://localhost:3000/birds/${id}`,
          method: 'PATCH',
          data: { name },
        });
        await this.getBirds();
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
