import { Component, OnInit } from '@angular/core';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  getSelectedItem() {
    return this.listService.selectedItem;
  }

  onDeleteItem() {
    this.listService.deleteItem(this.listService.selectedItem);
  }
}
