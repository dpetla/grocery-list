import { Item } from './item/item.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ListService implements OnInit {
  items: Array<Item> = [
    { title: 'Item 1', desc: 'Item 1 description', picked: 't' },
    { title: 'Item 2', desc: 'Item 2 description', picked: 'f' }
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  deleteItem(item: Item) {
    if (window.confirm('Delete item?')) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }

}
