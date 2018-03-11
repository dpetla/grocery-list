import { Item } from './item/item.model';
import { OnInit } from '@angular/core';

export class ListService implements OnInit {
  items: Array<Item> = [
    { title: 'Item 1', desc: 'Item 1 description', isPurchased: true },
    { title: 'Item 2', desc: 'Item 2 description', isPurchased: false }
  ];

  ngOnInit(): void {
  }

  deleteItem(item: Item) {
    if (window.confirm('Delete item?')) {
      this.items.splice(this.items.indexOf(item), 1);
    }
  }

}
