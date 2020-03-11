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
    edit(car) {
        return HTTP.put(`/cars/${car.id}`, car)
    }

}
export const carService = new CarService()