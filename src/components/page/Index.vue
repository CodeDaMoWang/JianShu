<template>
  <b-row>
    <b-col cols="8">
      <v-carousel></v-carousel>

      <v-label></v-label>

      <v-media></v-media>


    </b-col>
    <b-col cols="4">

      <v-upper></v-upper>

      <v-bottom></v-bottom>

    </b-col>
  </b-row>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import vLabel from '../common/Label';
  import vUpper from '../common/Upper';
  import vMedia from '../common/Media';
  import vBottom from '../common/Bottom';


  export default {
    name: "Index",
    components: {
      vCarousel,
      vLabel,
      vUpper,
      vMedia,
      vBottom
    }
  }
</script>

<style scoped>

</style>
