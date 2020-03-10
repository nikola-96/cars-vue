import { HTTP } from './conection'

export default class CarService {

    getAll() {
        return HTTP.get('/cars')
    }
    get() {
        HTTP.get('/cars')
            .then(response => console.log(response.data))
    }
}
export const carService = new CarService()