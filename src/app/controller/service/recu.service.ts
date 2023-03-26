import { Injectable } from '@angular/core';
import {Recu} from "../model/recu.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecuService {
  private _recu!:  Recu;
  private _recus!: Array<Recu>;
  private _url = "http://localhost:8036/api/v1/recu/";

  constructor(private _http:HttpClient) { }
  public findAll():Observable<Array<Recu>>{
    return this._http.get<Array<Recu>>(this.url);
  }
  public save(recu: Recu):Observable<Recu>{
    return this._http.post<Recu>(this.url , this.recu);
  }
  public  deleteByReference(code: string): Observable<number>{
    return this._http.delete<number>(this.url+'code/'+code);
  }

  get recu(): Recu {
    if (this._recu == null){
      this._recu = new Recu();
    }
    return this._recu;
  }

  set recu(value: Recu) {
    this["_recu"] = value;
  }

  get recus(): Array<Recu> {
    if (this._recus == null){
      this._recus = new Array<Recu>();
    }
    return this._recus;
  }

  set recus(value: Array<Recu>) {
    this._recus = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }
}
