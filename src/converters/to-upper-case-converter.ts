import {PipeTransform} from "angular2/core";
import {Pipe} from "angular2/core";

@Pipe({name: 'toUpperCase'})
export class ToUpperCasePipe implements PipeTransform {
	transform(value: any): any {
		return value.toUpperCase();
	}
}