import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import {HeaderContentComponent} from './header/content/headerContent.component';
import {HeaderComponent} from './header/header.component';
import {NavigationContentComponent} from './navigation/content/navigationContent.component';
import {BlockerComponent} from './ui/blocker/blocker.component';
import {LoaderComponent} from './ui/loader/loader.component';
import {SpinnerComponent} from './ui/spinner/spinner.component';
import {ProgressbarComponent} from './ui/progressbar/progressbar.component';
import {FooterContentComponent} from './footer/content/footerContent.component';
import {ClientModule} from './client.module';
import {ParameterComponent} from './parameterManager/parameter/parameter.component';
import {ParameterListComponent} from './parameterManager/parameterList/parameterList.component';
import {HighlightComponent} from './highlight/highlight.component';

@NgModule({
	declarations: [
		RootComponent,
		NavigationComponent,
		NavigationContentComponent,
		FooterComponent,
		FooterContentComponent,
		HeaderComponent,
		HeaderContentComponent,
		BlockerComponent,
		LoaderComponent,
		SpinnerComponent,
		ProgressbarComponent,
		ParameterComponent,
		ParameterListComponent,
		HighlightComponent
	],
	imports: [
		BrowserModule,
		ClientModule.forRoot(),
	],
	bootstrap: [RootComponent]
})
export class AppModule { }
