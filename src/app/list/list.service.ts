import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from './item/item.model';

@Injectable()
export class ListService implements OnInit {
  url = 'http://localhost:8080/items';
  items: Array<Item> = [ ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  getItems() {
    return this.http.get<Item[]>(this.url)
      .subscribe(data => this.items = data);
  }

  addItem(item: Item) {
    return this.http.post<Item>(this.url, item)
      .subscribe(data => console.log(data));
  }

  updateItem(item: Item) {
    return this.http.put(this.url + '/' + item.id, item)
      .subscribe(data => console.log(data));
  }

  deleteItem(item: Item) {
    if (window.confirm('Delete item?')) {
      this.http.delete(this.url + '/' + item.id)
        .subscribe(data => this.getItems());
    }
  }
}
