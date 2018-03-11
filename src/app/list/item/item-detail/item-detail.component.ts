import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { ListService } from '../../list.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  errorMsg = '';

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
    // check if title is already in use
    const duplicateTitle = this.listService.items
      .map((item, index) => {
        return (item.title === form.value.title) && (index === this.listService.items.indexOf(item));
      })
      .reduce((acum, value) => acum || value);

    if (!duplicateTitle || this.item.title === form.value.title) {
      // update title only when isn't already in use
      if (this.item.title !== form.value.title) {
        this.item.title = form.value.title;
      }
      this.item.desc = form.value.desc;
      this.onClose();
    } else {
      this.errorMsg = 'Item alredy exists in the list!';
      setTimeout(() => this.errorMsg = '', 3000);
    }
  }
}
