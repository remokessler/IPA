import {ModuleWithProviders, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ParameterService} from './services/parameterService';
import {HttpService} from './services/httpService';

@NgModule({
	declarations: [

	],
	exports: [
		RouterModule,
		BrowserAnimationsModule,
	],
	imports: [
		RouterModule,
		HttpClientModule,
		BrowserAnimationsModule,
	]
})

export class ClientModule {

	constructor() {
	}

	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: ClientModule,
			providers: [
				HttpService,
				ParameterService,
			]
		};
	}
}
