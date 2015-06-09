import {Component, View,NgFor} from 'angular2/angular2';

// import the person list, which represents the array that contains all persons.
import {PersonService} from '../../services/PersonService';

//import our person model that represents our person from the REST service.
import {Person} from '../../models/Person';

@Component({
  selector: 'component-1',
  appInjector: [PersonService]
})
@View({
  templateUrl: './components/personlist/personlist.html?v=<%= VERSION %>',
  directives: [NgFor]
})
export class PersonList {
  person: Person;
  personArray: Array<string>;

  constructor(ps: PersonService) {
    this.personArray = ps.getAllPersons().map((p)=>JSON.stringify(p));
  }
}