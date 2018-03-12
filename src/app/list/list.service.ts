import { Item } from './item/item.model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService implements OnInit {
  items: Array<Item> = [ ];
  url = 'http://localhost:8080/items';

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
  }

  deleteItem(item: Item) {
    if (window.confirm('Delete item?')) {
      // this.items.splice(this.items.indexOf(item), 1);
      this.http.delete(this.url + '/' + item.id)
        .subscribe(data => this.getItems());
    }
  }


  getItems() {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*'
    //   })
    // };

    return this.http.get<Item[]>(this.url)
      .subscribe(data => this.items = data);
  }


  addItem(item: Item) {
    return this.http.post(this.url, item)
      .subscribe(data => console.log(data));
  }

  updateItem(item: Item) {
    console.log(item)
    return this.http.put(this.url + '/' + item.id, item)
      .subscribe(data => console.log(data));
  }

}
