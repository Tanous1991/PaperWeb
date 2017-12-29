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

  get() {
    this.PaperService.getPaper().subscribe(resData => this.papers = resData);
    setTimeout(() => {
      console.log("List Papers", this.papers);
    }, 5000);
  }

  detail(id: Number) {
    this.router.navigate(['detail/' + id]);
  }

  search() {
    var motJson = JSON.parse('{"search":"' + this.mot + '"}');
    var temp;
    var TextslimTab: any[] = [];
    var outCitationsTabTemp: any[] = [];
    var inCitationsTabTemp: any[] = [];
    var inCitations: String = "";
    var outCitations: String = "";
    var inCitationsT: String[] = [];
    var outCitationsT: String[] = [];
    this.PaperService.searchPaper(motJson).subscribe(resData => TextslimTab = resData);
    setTimeout(() => {
      this.papers = TextslimTab;
      TextslimTab.forEach(element => {
        inCitations = inCitations + "," + element.outCitations;
        outCitations = outCitations + "," + element.inCitations;
      });
      inCitationsT = inCitations.split(",");
      outCitationsT = outCitations.split(",");

      //get inCitations
      inCitationsT.forEach(element => {
        if (element != "") {
          this.PaperService.getPaperById(element).subscribe(resData => temp = resData);
          setTimeout(() => {
            if (temp != null{
              inCitationsTabTemp.push(temp);
            }
          }, 500);
        }
        this.inCitationsTab = inCitationsTabTemp;
      });

      //get outCitations
      outCitationsT.forEach(element => {
        if (element != "") {
          this.PaperService.getPaperById(element).subscribe(resData => temp = resData);
          setTimeout(() => {
            if (temp != null{
              outCitationsTabTemp.push(temp);
            }
          }, 500);
        }
        this.outCitationsTab = outCitationsTabTemp;
      });
    }, 1000);
  }
}
