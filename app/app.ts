/// <reference path="../typings/tsd.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {PersonList} from './components/personlist/personlist';
import {PersonAdd} from './components/personadd/personadd';

@Component({
    selector: 'app'
})
@RouteConfig([
    {path: '/', component: PersonList, as: 'personlist'},
    {path: '/personadd', component: PersonAdd, as: 'personadd'}
])
@View({
    templateUrl: './app.html?v=<%= VERSION %>',
    directives: [RouterOutlet, RouterLink]
})
class App {
}

bootstrap(App, [routerInjectables]);
