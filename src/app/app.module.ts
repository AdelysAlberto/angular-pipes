import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
import { AppComponent } from "./app.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { PasswordPipe } from "./pipes/password.pipe";
registerLocaleData(localeEs);

@NgModule({
	declarations: [AppComponent, CapitalizePipe, PasswordPipe],
	imports: [BrowserModule],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: "es"
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
