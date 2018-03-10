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
    this.listService.items.push({
      title: 'lkdjf',
      desc: 'fkalsj',
      isCompleted: false
    });
  }

  getItems() {
    return this.listService.items;
  }

}
