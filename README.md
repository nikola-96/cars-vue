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
    Zadatak 3

    • Dodati komponentu AddCar i route-u `/add` koja otvara ovu komponentu
    • U layout dodati link `Add` koji vodi na URL `/add`
    • Prikazati formu gde se upisuju svi potrebni podaci o automobilu
        ◦ brand i model se unose pomoću text input-a
        ◦ year se unosi preko select box-a, u kome su prikazane godine 1990- 2018
        ◦ maxSpeed i numberOfDoors se unose pomoću number input-a
        ◦ isAutomatic se obeležava preko checkbox-a
        ◦ engine realizovati preko radio button-a. Opcije su `diesel`, `petrol`, `electric`, `hybrid`
    • Formu submit-ovati pomoću submit button-a
    • U servis `Cars` dodati metodu `add`. Ova metoda treba da prosleđuje podatke endpoint-u `/api/cars`
    • Submit-ovanje forme treba da poziva metodu `add` u servisu `Cars` i prosleđuje odgovarajuće podatke
    • Nakon submit-ovanja forme, redirect-ovati korisnika na `/cars` stranicu
    • Commit-ovati urađeno

Zadatak 4

    • Na formu dodati button `Reset`. Ovaj button treba da reset-uje formu.
    • Commit-ovati urađeno



	Zadatak 5

    • Na formu dodati button `Preview`. Ovaj button treba da otvara alert modal i da prikaže trenutne podatke o automobilu.
    • Commit-ovati urađeno
    Zadatak 6

    • Postaviti HTML validaciju na formu
        ◦ Sva polja sem maxSpeed su required
        ◦ brand i model polja moraju da imaju bar 2 karaktera
    • Commit-ovati urađeno
Zadatak 7

    • Na listi automobila, pored svakog automobila postaviti dugme `Edit`
    • Klik na ovo dugme treba da vodi na stranicu `/edit/:id`, koja treba da prikaže `AddCar` komponentu
    • U servisu `Cars` napraviti metodu `get (id)`, koja će sa endpoint-a `/api/cars/{id}` dobaviti podatke o automobilu na osnovu prosleđenog iparametra `id`
    • U `AddCar` pomoću parametra `id` iz URL-a, implementirati dobavljanje odgovarajućeg automobila iz servisa `Cars`.
    • Implementirati edit-ovanje automobila preko iste forme za kreiranje.
        ◦ Formu popuniti sa podacima postojećeg objekta
        ◦ U servis `Cars` dodati metodu `edit (id, car)` koja ce primati id automobila koji se edit-uje, i prosleđivati na endpoint `/api/cars/{id}`
        ◦ Prilikom submit-ovanja forme pozvati ili `add` ili `edit`, u zavisnosti da se edit-uje ili dodaje nov automobil
    • Commit-ovati urađeno
Zadatak 8

    • Na listi automobila, pored svakog automobila postaviti dugme `Delete`
    • Klik na ovo dugme treba da pozove metodu `delete (id)` servisa `Cars`, koja će prosleđeni id poslati na endpoint `api/cars/{id}` i time obrisati automobil iz liste
    • Commit-ovati urađeno
    
    Dodatno 😎
    • Implementirati prompt-ovanje korisnika prilikom brisanja automobila iz liste.
    • Istražiti dodatne opcije za validiranje formi
