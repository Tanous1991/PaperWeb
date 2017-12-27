import { Router } from '@angular/router';
import { PaperService } from './../app.service.ts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  papers : any[] = [];
  title = 'app';
  mot : String;

  constructor(private PaperService: PaperService,
  private router: Router) { }

  ngOnInit() {
  }

  get() {
    this.PaperService.getPaper().subscribe(resData => this.papers = resData);
    setTimeout(() => {
      console.log("List Papers" , this.papers);
    }, 5000);
  }

  detail(id: Number){
    this.router.navigate(['detail/'+id]);
  }

  search(){
    var motJson = JSON.parse('{"search":"'+this.mot+'"}');
    //console.log(motJson);
    this.PaperService.searchPaper(motJson).subscribe(resData => this.papers = resData);
  }
}
