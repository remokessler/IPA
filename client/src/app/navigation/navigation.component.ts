import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
	selector: 'cmi-viaduc-nav',
	templateUrl: 'navigation.component.html',
	styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit, OnDestroy {

	private _mobileNavOpen: boolean = false;

	constructor() {
	}

	public ngOnInit(): void {
	}

	public ngOnDestroy(): void {
	}

	public onMobileNavToggle(open: boolean) {
		this._mobileNavOpen = open;
	}

	public getNavCss(): string {
		return this._mobileNavOpen ? 'nav-main yamm navbar nav-open' : 'nav-main yamm navbar';
	}

}
