import { Component } from '@angular/core';

@Component({
	selector: 'cmi-viaduc-root',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.less']
})
export class RootComponent {
	public preloading: boolean = true;
	constructor() {
		this.preloading = false;
	}
}
