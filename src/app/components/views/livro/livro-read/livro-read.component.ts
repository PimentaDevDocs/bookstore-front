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

    displayedColumns: string[] = ['id', 'titulo', 'livros', 'acoes']

    constructor(private router: Router, private route: ActivatedRoute, private livroService: LivroService) {
    }

    ngOnInit(): void {

        this.findAll()
    }

    findAll = () => {

        this.livroService.findAllByCategoria(this.route.snapshot.paramMap.get('id')!)
            .subscribe(data => {
                this.livros = data
                console.log(this.livros)
            })

    }

    edit(row: LivroModel) {

    }

    delete(row: LivroModel) {

    }
}
