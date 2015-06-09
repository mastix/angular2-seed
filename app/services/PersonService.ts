import {Person} from '../models/Person';

export class PersonService {
    persons = [new Person("1", "Sascha", "Sambale"), new Person("2", "Max", "Mustermann")];

    getAllPersons():Array<Person> {
        return this.persons;
    }

    /*getPerson(theId:string):Person {
        return this.persons.filter((p)->p.id === theId);
    }*/

    addPerson(thePerson:Person) {
        console.log("Added person!");
        console.log(thePerson);
        this.persons.push(thePerson);
    }
}
