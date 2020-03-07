import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent {
	title = "Pipes";
	nombre: string = "Capitan America";
	arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	PI: number = Math.PI;
	percentage: number = 0.234;
	salary: number = 65500.5;
}
