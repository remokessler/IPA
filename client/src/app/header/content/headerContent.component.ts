import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
	selector: 'cmi-viaduc-header-content',
	templateUrl: 'headerContent.component.html'
})
export class HeaderContentComponent implements OnInit, AfterViewInit {
	private _elem: any;
	private _languages: any[];

	constructor(private _elemRef: ElementRef) {
		this._elem = this._elemRef.nativeElement;
	}

	public ngOnInit(): void {
	}

	public ngAfterViewInit(): void {
	}

	private refresh(): void {

	}

	public get versionInfo(): string {
		return '';
	}

	public get languages(): any[] {
		this.refresh();
		return this._languages;
	}

	public get language(): string {
		return 'de';
	}

	public setLanguage(lang: any): void {
	}
}
