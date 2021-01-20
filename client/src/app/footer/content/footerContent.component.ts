import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';

@Component({
	selector: 'cmi-viaduc-footer-content',
	templateUrl: 'footerContent.component.html'
})
export class FooterContentComponent implements OnInit, AfterViewInit {
	private _elem: any;

	constructor(private _elemRef: ElementRef) {
		this._elem = this._elemRef.nativeElement;
	}

	public ngOnInit(): void {
	}

	public ngAfterViewInit(): void {
	}

	public get language(): string {
		return '';
	}

}
