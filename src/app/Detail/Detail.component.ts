import { forEach } from '@angular/router/src/utils/collection';
import { PaperService } from './../app.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TruncateModule } from 'ng2-truncate';

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
  show1 : String = "Show more";
  show2 : String = "Show more";
  limit1 : Number = 300;
  limit2 : Number = 3 ;
  
  constructor(private route: ActivatedRoute,
    private PaperService: PaperService) { }

  async ngOnInit() {
    this.route.params.subscribe(res => this.id = res.id);
    await this.getId();
    await this.getinCitations(this.paper);
    await this.getoutCitations(this.paper);
    if (this.inCitations.length > 0) {
      this.tab1 = true;
    }
    if (this.outCitations.length > 0) {
      this.tab2 = true;
    }
  }

  async getId() {
    await this.PaperService.getPaperById(this.id).then(resData => this.paper = resData);
  }

  async getinCitations(temp: any) {
    console.log("getinCitations");
    var inCitationstab: String = temp.inCitations;
    console.log("inCitationstab = " + inCitationstab);
    await this.PaperService.getPaper(inCitationstab).then(resData => this.inCitations = resData);
    console.log("inCitations = " + this.inCitations.length);
  }

  async getoutCitations(temp: any) {
    console.log("getoutCitations");
    var outCitationstab: String = temp.outCitations;
    console.log("outCitationstab = " + outCitationstab);
    await this.PaperService.getPaper(outCitationstab).then(resData => this.outCitations = resData);
    console.log("outCitations = " + this.outCitations.length);
  }

  showmore(x : String){
    if(x == "1"){
      if(this.limit1 == 300){
        this.limit1 = 300000000000000;
        this.show1 = "show less";
      }else{
        this.limit1 = 300;
        this.show1 = "show more";
      }
    }
    if(x == "2"){
      if(this.limit2 == 3){
        this.limit2 = 100;
        this.show2 = "Show less";
      }else{
        this.limit2 = 3;
        this.show2 = "Show more";
      }
    }

  }
}
