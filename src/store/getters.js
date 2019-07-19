export default {
  petCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getAllCats: (state) => (species) => {
    return state.cats.filter(cat => cat.species === species).length
  }
}
