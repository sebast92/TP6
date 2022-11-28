<template>

  <section class="src-componentes-header">
    <div id="header">
      <h1>The Great
        <br>
        <span id="colorDisplay"> {{ pickedColor }} </span>
        <br>
        Guessing Game
      </h1>
    </div>

    <Navigator @picked-color="pickedColor = $event" />
  </section>

</template>

<script>

import Navigator from './Navigator.vue'

export default {
  name: 'src-componentes-header',
  props: [],
  components: {
    Navigator
  },
  mounted() {
    this.pickColor()
  },
  data() {
    return {
      pickedColor: ""

    }
  },
  methods: {
    pickColor() {
      this.pickedColor = this.createRandomStringColor()

    },

    createRandomStringColor() {
      var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")"
      return newColor;
    },

    randomInt() {
      return Math.floor(Math.random() * 256)
    },
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-components-header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;

}
</style>
