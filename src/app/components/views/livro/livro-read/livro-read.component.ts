import {Component, OnInit} from '@angular/core';
import {LivroModel} from "../livro.model";
import {ActivatedRoute, Router} from "@angular/router";
import {LivroService} from "../livro.service";

@Component({
    selector: 'app-livro-read',
    templateUrl: './livro-read.component.html',
    styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

    livros: LivroModel[] = []

    id: string = '';

    displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes']

    constructor(private router: Router, private route: ActivatedRoute, private livroService: LivroService) {
    }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id')!
        this.findAll()
    }

    findAll = () => {

        this.livroService.findAllByCategoria(this.id)
            .subscribe(data => {
                this.livros = data
            })

    }

    edit(livro: LivroModel) {
        this.router.navigateByUrl('livros/update', {
            state: {livro: livro}
        })

    }

    delete(row: LivroModel) {

    }

    addLivro = (): void => {
        this.router.navigateByUrl(`categorias/${this.id}/livros/create`)
    }
}
