import { Component, Inject } from '@angular/core';
import { Item } from '../item.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ListService } from '../../list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {

  constructor(
    public listService: ListService,
    public dialogRef: MatDialogRef<ItemDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public item: Item) { }

  onClose(): void {
    this.dialogRef.close();
  }

  onDelete() {
    this.listService.deleteItem(this.item);
    this.onClose();
  }

  onSave(form: NgForm) {
    this.item.title = form.value.title;
    this.item.desc = form.value.desc;
    this.onClose();
  }
}
