import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoriaModel} from "./categoria.model";
import {environment} from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    baseURL: string = environment.baseUrl;

    constructor(private httpClient: HttpClient) {
    }

    findAll = (): Observable<CategoriaModel[]> => {
        const url = `${this.baseURL}/categorias`;
        return this.httpClient.get<CategoriaModel[]>(url)
    }
}
