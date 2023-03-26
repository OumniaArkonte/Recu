import {Component, OnInit} from '@angular/core';
import {RecuService} from "src/app/controller/service/recu.service";
import {Recu} from "src/app/controller/model/recu.model";

@Component({
  selector: 'app-recu-create',
  templateUrl: './recu-create.component.html',
  styleUrls: ['./recu-create.component.css']
})
export class RecuCreateComponent implements OnInit{
  ngOnInit(): void {
  }
  public save(): void{
    this.recuService.save(this.recu).subscribe(
      data => {
        if (data == null) {
          alert('failure : code exist')
        }else{
          //this.recu = null;
          alert('success : recu sav')
        }
      }
    );
  }
  constructor(private recuService: RecuService) {
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



}
