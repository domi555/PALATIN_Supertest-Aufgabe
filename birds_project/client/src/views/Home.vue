<template>
  <div>
    <!-- <p class="text-h3 text-center mt-4"><v-icon class="text-h3 red--text">mdi-heart</v-icon> Willkommen! <v-icon class="text-h3 red--text">mdi-heart</v-icon></p> -->

    <h2>Our Endangered Birds</h2>

    <div style="width: 400px">
      <v-text-field v-model="vorname" label="Vorname"></v-text-field>
      <v-text-field
        v-model="nachname"
        label="Nachname"
        class="mt-0 pt-0"
      ></v-text-field>
    </div>

    <p class="font-italic">
      Click on the <span class="font-weight-bold red--text">eye</span> icon if
      you have observed that bird!
    </p>

    <WatchedBirdname :visible="visible" :bird="bird"></WatchedBirdname>

    <v-data-table
      :headers="headers"
      :items="birds"
      class="elevation-1"
      :items-per-page="5"
    >
      <template v-slot:item.pic="{ item }">
        <v-img :src="item.pic" width="80" height="80"></v-img>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon class="red--text" @click="observedBird(item)"> mdi-eye </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import WatchedBirdname from '../components/WatchedBirdname.vue';

export default {
  name: 'Home',
  data() {
    return {
      vorname: '',
      nachname: '',

      visible: false,
      bird: null,

      headers: [
        {
          text: 'ID',
          value: 'id',
        },
        { text: 'Image', value: 'pic' },
        {
          text: 'Common Name',
          value: 'commonName',
        },
        {
          text: 'Scientific Name',
          value: 'scientificName',
        },
        {
          text: 'Observed',
          value: 'count',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    };
  },
  props: {
    birds: {
      type: Array,
    },
  },
  methods: {
    observedBird(bird) {
      if (this.vorname.length == 0 || this.nachname.length == 0)
        alert('Textfelder nicht ausgefüllt.');
      else {
        this.bird = bird;
        this.$emit('observed', {
          id: bird.id,
          name: `${this.vorname} ${this.nachname}`,
        });
        this.visible = true;
      }
    },
  },
  components: {
    WatchedBirdname,
  },
};
</script>
