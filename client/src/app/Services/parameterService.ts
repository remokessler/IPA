import {Injectable} from '@angular/core';
import {HttpService} from './httpService';
import {Parameter} from '../parameterManager/parameterEntity';

@Injectable()
export class ParameterService {
	constructor(private _http: HttpService) {
	}
	public async getAllParameters() {
		let url = this._createBaseUrl() + '/GetAllParameters';
		return await this._http.get<Parameter[]>(url, this._http.noCaching).toPromise();
	}

	public async saveParameter(param: Parameter) {
		let url = this._createBaseUrl() + '/SaveParameter';
		return await this._http.post<void>(url, param, this._http.noCaching).toPromise();
	}

	private _createBaseUrl(): string {
		let loc = window.location;
		let port = isNaN(parseInt(loc.port, 10)) ? undefined : parseInt(loc.port, 10);
		let baseUrl = '' + loc.protocol + '//' + loc.hostname + (port ? ':' + port : '') + '/ipa/Controllers';
		return baseUrl;
	}
}
