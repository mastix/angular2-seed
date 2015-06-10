import {Person} from '../models/Person';

export class PersonService {
    getAllPersons() {
        var personService = this;
        return new Promise(function (resolve, reject) {
            personService.getJSON('http://api.yourdomain.com/person').then(function (retrievedPersons) {
                if (!retrievedPersons || retrievedPersons.length == 0) {
                    reject("ERROR fetching persons...");
                }
                resolve(retrievedPersons.map((p)=>new Person(p.id, p.firstname, p.lastname)));
            });
        });
    }

    addPerson(thePerson:Person) {
        this.postJSON('http://api.yourdomain.com/person', thePerson).then((response)=>alert('Added person successfully! Click list to see all persons.'));
    }

    getJSON(url:string) {
        return new Promise(function (resolve, reject) {
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

    postJSON(url:string, person:Person) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            var params = `id=${person.getId()}&firstname=${person.getFirstName()}&lastname=${person.getLastName()}`;
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = handler;
            xhr.responseType = 'json';
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.send(params);
            function handler() {
                if (this.readyState === this.DONE) {
                    if (this.status === 201) {
                        resolve(this.response);
                    } else {
                        reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
                    }
                }
            }
        });
    }
}
