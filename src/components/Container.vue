<template>

  <section class="src-componentes-container">
    <div id="container">
      <div v-for="(color, index) in squares" :key="index" class="square" :style="{ 'background': color }"
        @click="validateColor(color, index)"></div>

        <button @click="dev()">PickColor</button>
    </div>
  </section>

</template>

<script>


export default {
  name: 'src-componentes-container',
  props: [],
    beforeMount() {
      this.squares = this.$store.state.squares
    }
  ,
  data() {
    return {
      squares : []
    }
  },
  methods: {
    validateColor(color, index) {
      console.log(index)
      if (this.$store.state.pickedColor == color) {
        console.log("Color correcto")
        console.warn('dispatch -> eleccionCorrecta', color)
        this.$store.dispatch('eleccionCorrecta', color)
        let squares = this.$store.state.squares
        console.log(squares)
        this.squares = squares
       // console.warn('dispatch -> asignarSquares', color)
       // this.$store.dispatch('asignarSquares', squares)
      } else {
        console.log("Color erroneo")
      }
    },
    setAllSquaresToColor(color) {
      let squares = []
      for (var i = 0; i < this.$store.state.squares.length; i++) {
        this.squares[i] = color
      }
      console.log(this.squares)
      return squares
    },
    setAll() {
      console.log(this.squares)
      console.log(this.$store.state.pickedColor)
    }
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-components-container {
  margin: 20px auto;
  max-width: 600px;

}

#container {
  background: #232323;
  font-family: "Montserrat", "Avenir";
}

.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
