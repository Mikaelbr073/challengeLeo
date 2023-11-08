import { Component } from '@angular/core';
import { ApiService } from '../app/services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  notas = [
    { 
      titile: "Estudar Biologia",
      body_text: "Comprar frutas para o suco",
      category: "Super mercado",
      create_at: "07/11/2023"
    },
    { 
      titile: "Compra Frutas",
      body_text: "Comprar frutas para o suco",
      category: "Super mercado",
      create_at: "07/11/2023"
    },
    { 
      titile: "teste",
      body_text: "Comprar frutas para o suco",
      category: "Super mercado",
      create_at: "07/11/2023"
    }
  ]

  constructor(private api:ApiService){
     this.getNotas();
  }

  getNotas = () => {
    this.api.getAllNotas().subscribe(
      data => {
        this.notas = data
      },
      error =>{
        console.log(
          'erro',
          error.message
        )
      }
      
      
    )
  };

  notasclick = (nota:any) => {
    this.api.getNotas(nota.titile).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(
          'erro',
          error.message
        );
      }
    ); 
  }; 

}
