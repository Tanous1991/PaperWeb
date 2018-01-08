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
  outCitationsTab: any[] = [];
  inCitationsTab: any[] = [];
  title = 'app';
  mot: String;

  constructor(private PaperService: PaperService,
    private router: Router) { }

  ngOnInit() {
  }

  detail(id: Number) {
    this.router.navigate(['detail/' + id]);
  }

  search() {
    var motJson = JSON.parse('{"search":"' + this.mot + '"}');
    this.PaperService.searchPaper(motJson).then(resData => this.papers = resData);
  }
}
