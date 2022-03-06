<template>
  <div v-if="visible" class="d-flex justify-center">
    <v-alert type="error"
      >Last watched:
      <span class="font-italic">{{ bird.commonName }}</span></v-alert
    >
  </div>
</template>

<script>
export default {
  props: {
    visible: { type: Boolean },
    bird: {
      type: String,
    },
  },
};
</script>
