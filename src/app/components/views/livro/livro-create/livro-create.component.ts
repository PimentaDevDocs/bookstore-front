import {Component, OnInit} from '@angular/core';
import {LivroModel} from "../livro.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LivroService} from "../livro.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

@Component({
    selector: 'app-livro-create',
    templateUrl: './livro-create.component.html',
    styleUrls: ['./livro-create.component.css']
})
export class LivroCreateComponent implements OnInit {

    livro: LivroModel = {titulo: '', nomeAutor: '', texto: '',}

    idCat: string = ''

    livroForm = new FormGroup({
        titulo: new FormControl('', [
            Validators.minLength(3),
            Validators.required
        ]),
        autor: new FormControl('', [
            Validators.minLength(3),
            Validators.required
        ]),
        texto: new FormControl('', [
            Validators.minLength(3),
            Validators.required
        ]),
    })

    constructor(private router: Router, private route: ActivatedRoute,
                private livroService: LivroService, private _location: Location) {
    }

    ngOnInit(): void {
        this.idCat = this.route.snapshot.paramMap.get('id')!
    }

    getMEssage() {
        if (this.livroForm.controls.titulo.invalid) {
            return 'O campo Título deve conter entre 3 e 100 caracteres.'
        }
        return false
    }

    create = (): void => {

        this.livroService.create(this.livro, this.idCat).subscribe(() => {
            this.livroService.message(`Livro ${this.livro.titulo} adicionado.`)
            this.cancel()
        }, () => {
            this.livroService.message(`Erro ao criar o livro, tente novamente mais tarde.`)
            this.cancel()
        })
    }

    cancel = (): void => {
        this._location.back()
    }
}
