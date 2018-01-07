import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PaperService {

    private url: string = "http://localhost:3000/papers";

    constructor(private http: Http) { }

    getPaper():Observable<any[]> {
        return this.http.get(this.url)
            .map((res: Response) => <any[]>res.json());
    }

    searchPaper(mot: String):Observable<any[]> {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, JSON.stringify(mot), options)
            .map((res: Response) => <any[]>res.json());
    }

    getPaperById(id: String):Observable<any[]> {
        return this.http.get(this.url + "/" + id)
            .map((res: Response) => <any>res.json());
    }

}