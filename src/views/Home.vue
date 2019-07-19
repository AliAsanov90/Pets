<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    {{ petCount }}
    {{ getAllCats('cat') }}
    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species: " label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="[{ text: 'Select One', value: null }, 'cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age: " label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age: null,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters([
      'petCount',
      'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit() {
      let { name, age, species } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }

      this.addPet(payload)

      event.target.reset()
    }
  }
}
</script>
