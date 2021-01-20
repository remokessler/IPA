import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/observable';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';

@Injectable()
export class HttpService {
	public noCaching: any = {nonce: true};

	constructor(private _http: HttpClient) {
	}

	private _configureObservable<T>(observable: Observable<any>): Observable<T> {
		return observable;
	}

	/**
	 * Requests a JSON from the provided url with HTTP method GET.
	 * @param {string} url
	 * @returns {Observable<T>}
	 */
	public get<T>(url: string, config?: any): Observable<T> {
		return this._configureObservable<T>(this._http.get(url));
	}

	public download(url: string): Observable<HttpEvent<any>> {
		let request = new HttpRequest('GET', url, {responseType: 'blob', reportProgress: true });
		return this._http.request(request);
	}

	/**
	 * Sends request to provided url with HTTP method DELETE.
	 * @param {string} url
	 * @returns {Observable<T>}
	 */
	public delete<T>(url: string, config?: any): Observable<T> {
		return this._configureObservable<T>(this._http.delete(url));
	}

	/**
	 * Sends a JSON to the provided url with HTTP method POST.
	 * @param {string} url
	 * @param {*} body
	 * @returns {Observable<T>}
	 */
	public post<T>(url: string, body: any, config?: any): Observable<T> {
		return this._configureObservable<T>(this._http.post(url, body));
	}
}
