<template>
    <div>
        <CarList :cars="cars"/>
        <h1></h1>
        <button @click="show" ></button>
    </div>
</template>

<script>
import CarList from '@/components/CarList.vue'
import { carService } from '@/services/car.js'
export default {
    name: 'AppCars',
    components:{
        CarList
    },
    data() {
        return {
            cars: [],
        }
    },
    beforeRouteEnter (to, from, next) {
        carService.getAll()
        .then((response) => {
            next((vm) => {
            vm.cars = response.data
            })
        }).catch((error) => {
            console.log(error)
        })
    },
    methods: {
        show(){
            console.log(this.cars)
        }
    },    
}
</script>