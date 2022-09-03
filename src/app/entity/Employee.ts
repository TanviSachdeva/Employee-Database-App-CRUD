export class Employee {
    id:string;
    firstname:string;
    lastname:string;
    age:number;
    country:string;
    gender:string;

    constructor(id:string,
        firstname:string,
        lastname:string,
        age:number,
        country:string,
        gender:string){
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.age = age;
            this.country = country;
            this.gender = gender;
        }
}
