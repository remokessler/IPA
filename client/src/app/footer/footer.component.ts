import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
	selector: 'cmi-viaduc-footer',
	templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit, OnDestroy {

	public reload: boolean = false;

	constructor() {
	}

	public ngOnInit(): void {
	}

	public ngOnDestroy(): void {

	}

}
