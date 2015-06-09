import {Component, View} from 'angular2/angular2';
import { FormBuilder, formDirectives, ControlGroup, Validators } from 'angular2/forms';

@Component({
  selector: 'component-1'
})
@View({
  templateUrl: './components/home/home.html?v=<%= VERSION %>',
})
export class Home {}