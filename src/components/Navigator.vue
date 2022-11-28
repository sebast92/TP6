<template>

  <section class="src-components-navigator">
    <div id="navigator">
      <button id="reset" @click="restart()">New Colors!</button>
      <button id="easy" :class="isEasy" @click="easyButton()">EASY</button>
      <button id="easy" :class="!isEasy" @click="hardButton()">HARD</button>
      <button @click="dev()">PickColor</button>
      
    </div>
    <Container />
  </section>

</template>

<script>

import Container from './Container.vue'

export default {
  name: 'src-componentes-navigator',
  props: [],
  components: {
    Container
  },
  beforeMount() {

    this.createSquares(this.colorCount)
    this.pickColor()
    this.squares = this.$store.state.squares
   
  },
  data() {
    return {
      isEasy: false,
      squares: [],
      colorCount: 6,
      pickedColor: ""
    }
  },
  methods: {
    easyButton() {
      if (!this.isEasy) {
        this.isEasy = true
        this.colorCount = 3
        this.createSquares(this.colorCount)
      }
    },

    hardButton() {
      if (this.isEasy) {
        this.isEasy = false
        this.colorCount = 6
        this.createSquares(this.colorCount)
      }
    },

    restart() {
      this.createSquares(this.colorCount)
      this.pickColor()
    },

    createSquares(numbers) {
        var arr = [];
        for (var i = 0; i < numbers; i++) {
          arr.push(this.createRandomStringColor())
        }
        console.log(arr)
        this.$store.dispatch('asignarSquares', arr)
      },
  
      createRandomStringColor() {
        var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")"
        return newColor;
      },
  
      randomInt() {
        return Math.floor(Math.random() * 256)
      },
  
      randomIntLowerThan(value) {
        return Math.floor(Math.random() * (value - 1))
      },

      pickColor() {
        let pickedColor = this.$store.state.squares[this.randomIntLowerThan(this.colorCount)]
  
        this.$store.dispatch('colorAsignado', pickedColor)
        console.log(this.pickedColor)
      },

      pickColorDev() {
        console.log(this.$store.squares)
        let pickedColor = this.$store.state.squares[this.randomIntLowerThan(this.colorCount)]
  
        this.$store.dispatch('colorAsignado', pickedColor)
        console.log(this.pickedColor)
      },

      dev() {
        console.log(this.$store.state.squares)
      }

  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-components-navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}

button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}

button:hover {
  color: white;
  background-color: steelblue;
}
</style>
