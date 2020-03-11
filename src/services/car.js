import { HTTP } from './conection'

export default class CarService {

    async getAll() {
        const response = await HTTP.get('/cars')
        return response.data
    }
    async add(car) {
        const response = await HTTP.post('/cars', car)
        return response
    }
    async getCar(id) {
        const response = await HTTP.get(`/cars/${id}`)
        return response.data
    }
    async edit(car) {
        const response = HTTP.put(`/cars/${car.id}`, car)
        return response.data
    }
    async deleteCar(id) {
        const response = HTTP.delete(`/cars/${id}`)
        return response.data
    }

}
export const carService = new CarService()