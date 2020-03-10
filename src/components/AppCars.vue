<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col><CarList :cars="cars"/></b-col>
            </b-row>
        </b-container>
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
    async created() {
        this.cars = await carService.getAll();
    },
}

</script>