import { PaperService } from './../app.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common'



@Component({
  selector: 'app-Detail',
  templateUrl: './Detail.component.html',
  styleUrls: ['./Detail.component.css']
})
export class DetailComponent implements OnInit {

  paper: any;
  inCitations: any[];
  outCitations: any[];
  tab1: boolean = false;
  tab2: boolean = false;
  id: String;
  show: boolean = true;
  show1: String = "Show more";
  show2: String = "Show more";
  limit1: Number = 300;
  limit2: Number = 3;

  constructor(private route: ActivatedRoute,
    private PaperService: PaperService,
    private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(res => this.id = res.id);
    this.getId();
  }

  getId() {
    this.PaperService.getPaperById(this.id).then(resData => {
      this.paper = resData,
        this.getinCitations(resData),
        this.getoutCitations(resData)
    }
    );
  }

  getinCitations(temp: any) {
    var list: String = temp.inCitations;
    console.log(list);
    this.PaperService.getPaper(list).then(resData => {
      this.inCitations = resData;
      if (this.inCitations.length > 0) {
        this.tab1 = true;
      }
      console.log("get inCitations");
      console.log(this.inCitations);
    });
  }

  getoutCitations(temp: any) {
    var list: String = temp.outCitations;
    console.log(list);
    this.PaperService.getPaper(list).then(resData => {
      this.outCitations = resData;
      if (this.outCitations.length > 0) {
        this.tab2 = true;
      }
      console.log("get outCitations");
      console.log(this.outCitations);
    });
  }

  detail(id: Number) {
    this.router.navigate(['detail/' + id]);
    window.location.reload();
  }

  showmore(x: String) {
    if (x == "1") {
      if (this.limit1 == 300) {
        this.limit1 = 300000000000000;
        this.show1 = "show less";
      } else {
        this.limit1 = 300;
        this.show1 = "show more";
      }
    }
    if (x == "2") {
      if (this.limit2 == 3) {
        this.limit2 = 100;
        this.show2 = "Show less";
      } else {
        this.limit2 = 3;
        this.show2 = "Show more";
      }
    }
  }
}
