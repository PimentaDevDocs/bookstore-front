import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CategoriaModel} from "./categoria.model";
import {environment} from "../../../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    baseURL: string = environment.baseUrl;

    constructor(private httpClient: HttpClient, private _snack: MatSnackBar) {
    }

    findAll = (): Observable<CategoriaModel[]> => {
        const url = `${this.baseURL}/categorias`;
        return this.httpClient.get<CategoriaModel[]>(url)
    }

    create = (categoria: CategoriaModel): Observable<CategoriaModel> => {
        const url = `${this.baseURL}/categorias`
        return this.httpClient.post<CategoriaModel>(url,
            categoria)
    }

    message = (str: string): void => {
        this._snack.open(`${str}`, 'OK', {
            horizontalPosition: "end",
            verticalPosition: "top",
            duration: 3000
        })
    }
}
