import { Item } from './item/item.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ListService implements OnInit {
  items: Array<Item> = [ ];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  deleteItem(item: Item) {
    if (window.confirm('Delete item?')) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }


  getItems() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<Item[]>('http://localhost:8080/items', httpOptions)
      .subscribe(data => this.items = data);
  }

}
