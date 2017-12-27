import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PaperService {

    private url: string = "http://localhost:3000/papers";

    constructor(private http: Http) { }

    getPaper() {
        return this.http.get(this.url)
            .map((res: Response) => <any[]> res.json());
    }

    searchPaper(mot: String) {
        console.log(mot)
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, mot,options)
            .map((res: Response) => <any[]> res.json());
    }

    getPaperById(id: Number) {
        return this.http.get(this.url+"/"+id)
            .map((res: Response) => <any> res.json());
    }

}