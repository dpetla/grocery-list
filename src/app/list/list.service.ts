import { Item } from './item/item.model';
import { OnInit } from '@angular/core';

export class ListService implements OnInit {
  items: Array<Item> = [
    { title: 'Item 1', desc: 'Item 1 description', isCompleted: false },
    { title: 'Item 2', desc: 'Item 2 description', isCompleted: false }
  ];
  selectedItem: Item;

  ngOnInit(): void {
  }

  toggleItemCompletion(item: Item) {
    item.isCompleted = !item.isCompleted;
  }

}
