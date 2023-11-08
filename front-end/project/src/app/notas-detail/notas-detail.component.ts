import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notas-detail',
  templateUrl: './notas-detail.component.html',
  styleUrls: ['./notas-detail.component.css']
})
export class NotasDetailComponent {
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.loadNotas();
  }

  loadNotas(){
    const titile =  this.route.snapshot.paramMap.get('titile');
    console.log(titile);

  }
}


