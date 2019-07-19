<template>
  <div>
    <h1>{{ capitalFirstLetter(species) }} for Adoption</h1>
    <b-table striped hover :items="items">
      <template slot="name" slot-scope="data">
        <router-link :to="`/pets/${species}/${data.index}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    species: String,
    items: Array
  },
  methods: {
    capitalFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
