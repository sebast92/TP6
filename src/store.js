import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        pickedColor: "",
        correctColorChosen: false,
        squares: []
    },
    actions: {
        colorAsignado({ commit }, color) {
            console.warn('actions -> colorAsignado', color, new Date().toLocaleString())
            try {
                commit('colorAsignado', color)
            }
            catch (error) {
                console.error(error)
            }
        },
        eleccionCorrecta({ commit }, value) {
            console.warn('actions -> eleccionCorrecta', value, new Date().toLocaleString())
            try {
                commit('eleccionCorrecta', value)
            }
            catch (error) {
                console.error(error)
            }
        },
        asignarSquares({ commit }, squares) {
            console.warn('actions -> asignarSquares', squares, new Date().toLocaleString())
            try {
                commit('asignarSquares', squares)
            }
            catch (error) {
                console.error(error)
            }
        }
    },
    mutations: {
        eleccionCorrecta(state, color) {
            console.warn('mutations -> eleccion correcta', color, new Date().toLocaleString())
            state.correctColorChosen = true


            let squares = []
            for (let i = 0; i < state.squares.length; i++) {
                squares[i] = color
            }
            console.log(squares)
            this.dispatch('asignarSquares', squares)
        },

        colorAsignado(state, color) {
            console.warn('mutations -> nuevo color asignado', color, new Date().toLocaleString())
            state.pickedColor = color
        },
        asignarSquares(state, squares) {
            console.warn('mutations -> squares asignados', squares, new Date().toLocaleString())
            state.squares = squares
            console.log("asi queda el state.squares")
            console.log(state.squares)
        }
    }
})
