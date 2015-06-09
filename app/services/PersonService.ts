import {Person} from '../models/Person';

export class PersonService {
    persons = [new Person("1", "Sascha", "Sambale"), new Person("2", "Max", "Mustermann")];

    getAllPersons():Array<Person> {
        console.log("GetAllPersons");
        console.log(this.persons);
        this.getJSON('http://api.sascha-sambale.de/person').then(function (retrievedPersons){
            console.log("Received persons from API!");
            console.log(retrievedPersons);
        });
        return this.persons;
    }

    /*getPerson(theId:string):Person {
        return this.persons.filter((p)->p.id === theId);
    }*/

    addPerson(thePerson:Person) {
        console.log("Added person!");
        console.log(thePerson);
        this.persons.push(thePerson);
        console.log(this.persons);
    }

    private getJSON(url) {
        return new Promise(function(resolve, reject){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = handler;
            xhr.responseType = 'json';
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.send();

            function handler() {
                if (this.readyState === this.DONE) {
                    if (this.status === 200) {
                        resolve(this.response);
                    } else {
                        reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
                    }
                }
            }
        });
    }
}
