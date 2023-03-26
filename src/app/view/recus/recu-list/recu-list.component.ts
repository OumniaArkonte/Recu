import {Component, OnInit} from '@angular/core';
import {RecuService} from "../../../controller/service/recu.service";
import {Recu} from "../../../controller/model/recu.model";

@Component({
  selector: 'app-recu-list',
  templateUrl: './recu-list.component.html',
  styleUrls: ['./recu-list.component.css']
})
export class RecuListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }
  constructor(private recuService:RecuService) {
  }
  public findAll():void{
    this.recuService.findAll().subscribe(
      data => this.recus = data
    );
  }

  get recu(): Recu {
    return this.recuService.recu;
  }

  set recu(value: Recu) {
    this.recuService.recu = value;
  }

  get recus(): Array<Recu> {
    return this.recuService.recus;
  }

  set recus(value: Array<Recu>) {
    this.recuService.recus = value;
  }
  public delete(r: Recu) {
    this.recuService.deleteByReference(r.code).subscribe(
      data => {
        let index = this.recus.findIndex(e => r.code == e.code);
        this.recus.splice(index, 1);
      }
    );
  }

}
