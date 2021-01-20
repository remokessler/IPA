import {AfterViewInit, Component, ElementRef, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'cmi-viaduc-nav-content',
	templateUrl: 'navigationContent.component.html',
	styleUrls: ['./navigationContent.component.less']
})
export class NavigationContentComponent implements AfterViewInit {
	private _elem: any;
	public mobileMainNavOpen = false;
	public mobileUserNavOpen = false;

	constructor(private _elemRef: ElementRef) {
		this._elem = this._elemRef.nativeElement;
	}

	@Output()
	public onMobileNavOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

	public ngAfterViewInit(): void {
	}

	public get language(): string {
		return '';
	}

	public toggleMainMobileNav(): void {
		this.mobileMainNavOpen = !this.mobileMainNavOpen;
		if (this.mobileUserNavOpen) {
			this.mobileUserNavOpen = false;
			this.onMobileNavOpen.emit(this.mobileUserNavOpen);
		}

		this.onMobileNavOpen.emit(this.mobileMainNavOpen);
	}

	public getMainMobileNavCss(): string {
		return (this.mobileMainNavOpen || this.mobileUserNavOpen) ? 'nav-mobile nav-open' : 'nav-mobile nav';
	}

	public getMainTableNavCss(): string {
		return this.mobileMainNavOpen ? 'table-row nav-open' : 'table-row nav';
	}

	public getMainTableCellNavCss(): string {
		return this.mobileMainNavOpen ? 'table-cell dropdown open' : 'table-cell dropdown';
	}

	public toggleUserMobileNav(): void {
		this.mobileUserNavOpen = !this.mobileUserNavOpen;
		if (this.mobileMainNavOpen) {
			this.mobileMainNavOpen = false;
			this.onMobileNavOpen.emit(this.mobileMainNavOpen);
		}

		this.onMobileNavOpen.emit(this.mobileUserNavOpen);
	}

	public getUserTableCellNavCss(): string {
		return this.mobileUserNavOpen ? 'table-cell dropdown open' : 'table-cell dropdown';
	}

	public get drillDownCointainerHeight(): string {
		let dropdownHeight = (window.screen.height) - 91;
		return (this.mobileUserNavOpen || this.mobileMainNavOpen) ? dropdownHeight + 'px' : 'auto';
	}

	public nullifyClick(event: any): void {
		let senderElementName = event.target.tagName.toLowerCase();
		if (senderElementName !== 'a') {
			event.stopPropagation();
		}
	}
}
