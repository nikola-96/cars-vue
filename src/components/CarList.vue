<template>
  <div class="jumbotron">
      <h3>Car List</h3>
      <table class="table">
        <tr>
          <th>Brand</th>
          <th>Model</th>
          <th>Year</th>
          <th>Max Speed</th>
          <th>Automatic</th>
          <th>Engine</th>
          <th>Number of Dors</th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.maxSpeed }}</td>
          <td>{{ car.isAutomatic }}</td>
          <td>{{ car.engine }}</td>
          <td>{{ car.numberOfDoors }}</td>
          <td><button type="button" class="btn btn-outline-secondary" @click="editCar(car.id)">Edit</button></td>
          <td><b-button variant="outline-danger" @click="deleteCar(car.id)">Delete</b-button></td>

          </tr>
      </table>
    </div>
</template>
<script>
import { carService } from '@/services/car.js'

export default {
    name: 'CarList',
    props: ['cars'],

    methods: {
     editCar(id){
      this.$router.push(`/edit/${id}`)
      },
      deleteCar(id){
        carService.deleteCar(id)
        location.reload();
      }
    },
}
</script>
