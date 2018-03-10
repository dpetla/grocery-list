import { Component, Input, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ListService } from '../list.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() item: Item;

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  toggleItemCompletion(item: Item) {
    this.listService.toggleItemCompletion(item);
  }

  onDisplayDetail(item: Item) {
    this.listService.selectedItem = item;
  }

}
