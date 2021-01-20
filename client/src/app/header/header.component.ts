import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
	selector: 'cmi-viaduc-header',
	templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

	private _contextSubscription: any = null;
	public reload: boolean = false;

	constructor() {
	}

	public ngOnInit(): void {
	}

	public ngOnDestroy(): void {
		this._contextSubscription = null;
	}

}
