import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Item } from './item.model';
import { ListService } from '../list.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;

  constructor(
    private listService: ListService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  togglePurchase() {
    this.item.picked = this.item.picked === 'f' ? 't' : 'f';
    this.listService.updateItem(this.item);
  }

  // delete item from list if title is empty when loosing element's focus
  onBlur(item: Item) {
    if (item.title === '') {
      this.listService.deleteItem(item);
    } else {
      this.listService.addItem(item);
    }
  }

  // open dialog and passes dialog's config
  openDialog(item: Item): void {
    this.dialog.open(ItemDetailComponent, {
      width: '600px',
      data: item
    });
  }

}

