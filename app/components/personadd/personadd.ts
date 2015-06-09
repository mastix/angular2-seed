import {Component, View, NgFor} from 'angular2/angular2';

// import the person list, which represents the array that contains all persons.
import {PersonService} from '../../services/PersonService';

//import our person model that represents our person from the REST service.
import {Person} from '../../models/Person';

@Component({
  selector: 'component-2',
  appInjector: [PersonService]
})
@View({
  templateUrl: './components/personadd/personadd.html?v=<%= VERSION %>',
})
export class PersonAdd {
   addPerson(theId, theFirstName, theLastName) {
       console.log("received save event");
       let ps = new PersonService();
       ps.addPerson(new Person(theId, theFirstName, theLastName));
       console.log('Added person! :)');
   }
}