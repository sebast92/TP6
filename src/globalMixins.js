import Vue from 'vue'

const miMixinGlobal = {
    methods: {
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
        let pickedColor = this.$store.squares[this.randomIntLowerThan(this.colorCount)]
  
        this.$store.dispatch('colorAsignado', pickedColor)
        console.log(this.pickedColor)
      },
    },
    computed: {

    }    
}

Vue.mixin(miMixinGlobal)