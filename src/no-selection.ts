import {Component} from 'angular2/core';

@Component({
    selector: 'no-selection',
    templateUrl: 'dist/no-selection.html'
})

export class NoSelection {
	message: string = "Please pick a contact from the list.";
}
