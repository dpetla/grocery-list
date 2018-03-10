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

  toggleItemCompletion() {
    this.item.isCompleted = !this.item.isCompleted;
  }

  onBlur(item: Item) {
    if (item.title === '') {
      this.listService.deleteItem(item);
    }
  }

  openDialog(item: Item): void {
    const dialogRef = this.dialog.open(ItemDetailComponent, {
      width: '600px',
      data: item
    });

    dialogRef.afterClosed();
  }

}

