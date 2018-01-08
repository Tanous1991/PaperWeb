import { forEach } from '@angular/router/src/utils/collection';
import { PaperService } from './../app.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-Detail',
  templateUrl: './Detail.component.html',
  styleUrls: ['./Detail.component.css']
})
export class DetailComponent implements OnInit {

  paper: any ;
  papers : any[] ;
  id: String;

  constructor(private route: ActivatedRoute,
    private PaperService: PaperService) { }

  async ngOnInit() {
    this.route.params.subscribe(res => this.id = res.id);
    await this.getId();
    console.log(this.paper);
    await this.getinCitations(this.paper);
    //console.log("papers length : "+this.papers.length);
  }

  async getId(){
    await this.PaperService.getPaperById(this.id).then(resData => this.paper = resData );
  }

  async getinCitations(temp : any){
    var inCitations:any[];
    var inCitationstab : any[] = temp.inCitations;
    console.log(inCitationstab);
    var listJson = JSON.stringify({inCitationstab});
    console.log(listJson);
    await this.PaperService.getPaper(listJson).then(resData => this.papers = resData );
  }

  getoutCitations(){
    var outCitations:String[]= this.paper.outCitations;
    console.log(outCitations);
  }

}
