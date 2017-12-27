import { PaperService } from './../app.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Detail',
  templateUrl: './Detail.component.html',
  styleUrls: ['./Detail.component.css']
})
export class DetailComponent implements OnInit {

  paper: any ;
  id: Number;

  constructor(private route: ActivatedRoute,
    private PaperService: PaperService) { }

  ngOnInit() {
    this.route.params.subscribe(res => this.id = res.id);
    this.getId();
    setTimeout(() => {
      console.log("List Societe" , this.paper);
    }, 1000);
  }

  getId(){
    this.PaperService.getPaperById(this.id).subscribe(resData => this.paper = resData);
  }

}
