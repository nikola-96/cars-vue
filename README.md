# cars

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

////////////////////zadatak////////////////////////////////////////

Cilj zadatka je napraviti aplikaciju za evidenciju i ažuriranje liste automobila.
https://github.com/Vivify-Ideas/vivify-academy-cars-api

Zadatak 1

    • Napraviti novi Vue.js projekat `cars-app`
    • Commit-ovati projekat na GitHub na novi git repository
    • Uključiti Bootstrap 4 u projekat
    • Postaviti layout
    • Dodati komponentu `AppCars`
    • Postaviti route-u `/cars` koje će otvarati ovu komponentu. Ovo treba da bude default route-a
    • Postaviti link `Cars` u layout
    • Commit-ovati urađeno


Zadatak 2

    • Automobil je predstavljen objektom sa sledećim poljima: id, brand, model, year, maxSpeed, isAutomatic, engine, numberOfDoors.
    • Polje id se unosi od strane API-ja
    • Dodati servis `Cars`, u kome će se nalaziti metode koje šalju request-ove prema API-ju.  
    • Napraviti metodu `getAll` koja će dobavljati listu automobila sa `/api/cars`
    • Implementirati listanje automobila u komponenti `AppCars`
    • Commit-ovati urađeno
