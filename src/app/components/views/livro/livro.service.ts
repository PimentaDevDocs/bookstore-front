import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LivroModel} from "./livro.model";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LivroService {

    baseUrl: string = environment.baseUrl

    constructor(private http: HttpClient) {
    }

    findAllByCategoria = (id: string): Observable<LivroModel[]> => {

        const url = `${this.baseUrl}/livros?categoria=${id}`

        return this.http.get<LivroModel[]>(url)
    }
}
