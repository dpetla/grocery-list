import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.item = this.listService.selectedItem;
  }

}
