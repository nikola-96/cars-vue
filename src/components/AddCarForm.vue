<template>
  <div class="form-filed">
  <h1>Add new car</h1>
  <form @submit.prevent="" novalidate="true" class="jumbotron">
    <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      description="Let us know your brand."
      label="Enter your brand"
      label-for="input-horizontal"
    >
      <b-form-input id="input-horizontal" required="required" placeholder="Brand" v-model="car.brand"></b-form-input>
    </b-form-group>

        <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      label="Enter your car model"
      label-for="input-horizontal"
    >
      <b-form-input id="input-horizontal" required="required" placeholder="Model" v-model="car.model"></b-form-input>
    </b-form-group>

        <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      description="Let us know how old is your car."
      label="Select year"
      label-for="input-horizontal"
    >
        <select id="year" name="year" placeholder="Select Year" class="custom-select" required="required" v-model="car.year">
            <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
        </select>
    </b-form-group>

            <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      description="You must enter value in numbers."
      label="Enter your car max speed"
      label-for="input-horizontal"
    >
        <b-form-input required="required" key="number" placeholder="Max Speed" v-model="car.maxSpeed"></b-form-input>
    </b-form-group>

    

            <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      description="You must enter value in numbers."
      label="Enter number of doors"
      label-for="input-horizontal"
    >
        <b-form-input required="required" key="number" placeholder="Enter Number of Doors"v-model="car.numberOfDoors" ></b-form-input>
    </b-form-group>

            <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      description="You must select one."
      label="Select your engine type"
      label-for="input-horizontal"
    >
        <b-form-radio-group
        required="required"
          :options="options"
          class="mb-3"
          value-field="name"
          text-field="name"
          disabled-field="notEnabled"
          v-model="car.engine"
        ></b-form-radio-group>
    </b-form-group>



            <b-form-group
      id="fieldset-horizontal"
      label-cols-sm="4"
      label-cols-lg="3"
      description="If your gearbox is automatic, select."
      label="Your type of gearbox"
      label-for="input-horizontal"
    >
        <b-form-checkbox
            id="checkbox-1"
            v-model="car.isAutomatic"
            name="checkbox-1"
            value="true"
            unchecked-value="false"
          >
            Automatic
          </b-form-checkbox>
    </b-form-group>

    <b-button variant="outline-primary" @click="addCar">Add Car</b-button>
    <b-button variant="outline-danger" @click="resetForm">Reset</b-button>
  </form>
  <div>
  <b-button v-b-modal.modal-1>Preview</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Car brand: {{car.brand}}</p>
    <p class="my-4">Car model: {{car.model}}</p>
    <p class="my-4">Year: {{car.year}}</p>
    <p class="my-4">Max Speed: {{car.maxSpeed}}</p>
    <p class="my-4">Number of doors: {{car.numberOfDoors}}</p>
    <p class="my-4">Engine type: {{car.engine}}</p>
    <p class="my-4">Is automatic gearbox: {{car.isAutomatic}}</p>


  </b-modal>
</div>
</div>
  </div>
</template>

<script>
import { carService } from '@/services/car.js'

export default {
   data (){
    return {
      car:{},
      years: Array(29).fill(1990).map((n, i) => n + i),
      year:[],
      options:[
        { name: 'Petrol' },
        { name: 'Disel' },
        { name: 'Hibryd' },
        { name: 'Electric' },
      ]
    }
  },
  methods: {
    addCar(){
      carService.add(this.car)
      .then((success)=>{
        this.redirect()   
      })
    },
      redirect(){
    this.$router.push('/cars')
  },
    resetForm(){
      this.car = {}
    }

  },
  }

</script>
<style scoped>
  
</style>