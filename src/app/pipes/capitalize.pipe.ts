import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "capitalize"
})
export class CapitalizePipe implements PipeTransform {
	transform(value: string, all: boolean = true): string {
		value = value.toLocaleLowerCase();
		let text = value.split(" ");
		if (all) {
			text = text.map(item => item[0].toUpperCase() + item.substr(1));
			return text.join(" ");
		} else {
			text[0] = text[0][0].toUpperCase() + text[0].substr(1);
			return text.join(" ");
		}
	}
}
