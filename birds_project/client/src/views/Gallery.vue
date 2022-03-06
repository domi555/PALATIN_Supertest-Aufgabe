<template>
  <v-container>
    <h1 class="my-2 text-center">Our Birds!</h1>

    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(bird, i) in birds"
        :key="i"
        :src="bird.pic"
      ></v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  props: {
    birds: {
      type: Array,
    },
  },
};
</script>
