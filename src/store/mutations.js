export default {
  appendPet: (state, { pet, species }) => {
    console.log(species)
    state[species].push(pet)
  }
}
