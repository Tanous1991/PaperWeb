import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PaperService } from './../app.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  show = false;
  papers: any[] = [];
  title = 'app';
  mot: String;
  view : boolean = false ;
  nbelement : Number = 100;
  yearelement: Number = 40;
  sortelement: String;

  constructor(private PaperService: PaperService,
    private router: Router) { }

  ngOnInit() {
  }

  detail(id: Number) {
    this.router.navigate(['detail/' + id]);
  }

  async search() {
    await this.PaperService.searchPaper(this.mot).then(resData => this.papers = resData);
    if(this.papers.length > 0){
      this.view = true;
      console.log("ok");
    }
  }
  
  clear(){
    this.papers = null;
    this.mot = null;
    this.yearelement = null;
    this.nbelement = null;
    this.view = false;
  }
}
