import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onAddItem() {
    // check if there is already an item with empty title in the list
    let isCreate = true;
    this.listService.items.map(item => {
      if (item.title === '') {
        return isCreate = false;
      }
    });

    // create blank item
    if (isCreate) {
      this.listService.items.push({
        title: '',
        desc: '',
        picked: 'f'
      });
    }

  }

  getItems() {
    return this.listService.items;
  }

}
