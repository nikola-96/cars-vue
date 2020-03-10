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

}
export const carService = new CarService()