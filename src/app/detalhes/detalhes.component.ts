import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  imports: [FormsModule, CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss'
})
export class DetalhesComponent implements OnInit {
  servico: any;
  comentarios: string[] = [];

  servicos = [
    { id: 1, titulo: 'Assentar tijolos, ladrilhos e alvenarias', preco:'R$: 150,00', imagem: 'assets/imagens/tijolos.jpg' },
    { id: 2, titulo: 'Construir alicerces, paredes, muros, tetos, pisos', preco:'R$: 150,00', imagem: 'assets/imagens/alicerce.jpg' },
    { id: 3, titulo: 'Rebocar estruturas construídas', preco:'R$: 150,00', imagem: 'assets/imagens/reboco.jpg' },
    { id: 4, titulo: 'Construção de casas', preco:'R$: 150,00', imagem: 'assets/imagens/construcao.jpg' },
  ];

  novoComentario = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.servico = this.servicos.find((s) => s.id === Number(id));
  }

  adicionarComentario() {
    if (this.novoComentario.trim()) {
      this.comentarios.push(this.novoComentario);
      this.novoComentario = '';
    }
  }
}
