import {Component, View, NgFor} from 'angular2/angular2';

// import the person list, which represents the array that contains all persons.
import {PersonService} from '../../services/PersonService';

//import our person model that represents our person from the REST service.
import {Person} from '../../models/Person';

@Component({
    selector: 'personadd',
    appInjector: [PersonService]
})
@View({
    templateUrl: './components/personadd/personadd.html?v=<%= VERSION %>',
})
export class PersonAdd {
    addPerson(theId, theFirstName, theLastName) {
        new PersonService().addPerson(new Person(theId, theFirstName, theLastName));
    }
}