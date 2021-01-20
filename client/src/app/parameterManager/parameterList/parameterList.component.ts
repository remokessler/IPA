import {Component, EventEmitter} from '@angular/core';
import { ParameterService} from '../../services/parameterService';
import {Parameter} from '../parameterEntity';

@Component({
	selector: 'cmi-viaduc-parameterList',
	templateUrl: './parameterList.component.html',
	styleUrls: ['./parameterList.component.less']
})
export class ParameterListComponent {
	public loading: boolean = true;
	public filteredParameters: Parameter[] = [];
	private _allParameters: Parameter[] = [];
	public validationEvent: EventEmitter<void> = new EventEmitter<void>();
	public searchString: string = '';
	public searchedStringUpToDate: boolean;

	constructor(private _params: ParameterService) {
		this.getAllParameters();
	}

	public async getAllParameters() {
		this._params.getAllParameters().then(response => {
			this._allParameters = response;
			this.filteredParameters = this._allParameters;
			this.loading = false;
		});
	}

	public onValueChanged(event: any) {
		this.searchString = event.target.value;
		if (this.searchString) {
			this.searchedStringUpToDate = false;
		}
	}

	public emitValidationEvent() {
		this.validationEvent.emit();
	}

	public searchParam() {
		this.filteredParameters = [];
		this.searchedStringUpToDate = true;
		if (this.searchString !== '') {
			this.filteredParameters = this._allParameters.filter((param) =>
				param.name.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1 || param.value && param.value.toLowerCase().indexOf(this.searchString.toLowerCase()) !== -1
			);
		} else {
			console.log('search string not found!');
			this.filteredParameters = this._allParameters;
		}
	}
}
