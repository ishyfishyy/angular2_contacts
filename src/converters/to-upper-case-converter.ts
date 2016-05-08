import {PipeTransform} from "../../jspm_packages/npm/angular2@2.0.0-beta.11/ts/src/core/change_detection/pipe_transform";
import {Pipe} from "../../jspm_packages/npm/angular2@2.0.0-beta.11/src/core/metadata";

@Pipe({name: 'toUpperCase'})
export class ToUpperCasePipe implements PipeTransform {
	transform(value: any): any {
		return value.toUpperCase();
	}
}