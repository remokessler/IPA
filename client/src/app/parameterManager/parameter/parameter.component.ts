import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Parameter} from '../parameterEntity';
import {ParameterService} from '../../services/parameterService';
import {Subject} from 'rxjs/Subject';

@Component({
	selector: 'cmi-viaduc-parameter',
	templateUrl: './parameter.component.html',
	styleUrls: ['./parameter.component.less']
})
export class ParameterComponent implements OnInit {
	@Input()
	public parameter: Parameter;
	@Input()
	public validationEvent: EventEmitter<void> = new EventEmitter<void>();
	@Input()
	public searchString: string;

	public active: boolean = false;
	public value: string;
	public checked: boolean;
	public validationError: boolean;
	private static _onFocusChange: Subject<string> = new Subject();

	constructor (private _paramService: ParameterService) {
	}

	public ngOnInit() {
		ParameterComponent._onFocusChange.subscribe((name) => {
			if (name !== this.parameter.name) {
				this.cancelEdit();
			}
		});
		this.validationEvent.subscribe(() => {
			if (this.value) {
				this.validationError = !this._validateString(this.value);
			} else {
				this.validationError = !this._isValid();
			}

		});
		this.value = this.parameter.value;
		this.checked = this.parameter.value === 'True';
	}

	public onValueChanged(event: any) {
		if (this.parameter.type === 'checkbox') {
			this.checked = event.target.checked;
			if (this.checked === (this.parameter.value === 'True')) {
				this.active = false;
			}
		} else {
			this.value = event.target.value;
		}
	}

	public onFocus() {
		ParameterComponent._onFocusChange.next(this.parameter.name);
		this.active = true;
	}

	public saveParameter() {
		this.validationError = !this._validateString(this.value);
		if (this.validationError === false) {
			if (this.parameter.type === 'checkbox') {
				this.parameter.value = this.checked.toString();
			} else {
				this.parameter.value = this.value;
			}
			this._paramService.saveParameter(this.parameter).then( success => this.validationError = !success);
		}
	}

	public cancelEdit() {
		this.value = this.parameter.value;
		if (this.parameter.type === 'checkbox') {
			this.checked = this.parameter.value === 'True';
		} else {
			this.value = this.parameter.value;
		}
		this.active = false;
	}

	private _isValid(): boolean {
		return this._validateString(this.parameter.value);
	}

	private _validateString(value: string): boolean {
		if (!value && this.parameter.mandatory === true) {
			return false;
		}
		if (this.parameter && this.parameter.regexValidation && value) {
			let matches = value.match(this.parameter.regexValidation);
			return (matches && matches[0] !== null);
		} else {
			return true;
		}
	}

	public getErrorClass(): string {
		return this.validationError ? 'parameter-list row alert-danger' : 'parameter-list row';
	}

	public getInputClass(): string {
		if (this.value && this.searchString) {
			if (this.value.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1) {
				return 'form-control highlighted';
			}
		}
		return 'form-control';
	}
}
