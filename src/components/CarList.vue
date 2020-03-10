<template>
  <div>
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
          <th>Automatic</th>

        </tr>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.brand }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.maxSpeed }}</td>
          <td>{{ car.isAutomatic }}</td>
          <td>{{ car.engine }}</td>
          <td>{{ car.numberOfDoors }}</td>
          </tr>
      </table>
    </div>
</template>
<script>
export default {
    name: 'CarList',
    props: {
      cars:{
        type: Array
      }
    }
}
</script>
