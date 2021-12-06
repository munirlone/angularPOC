import { AfterViewInit, Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'events';
import { WellComponent } from '../well/well.component';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent implements OnInit {

  wellList = [
    { id: 1, name: "Well01", type: 'esp', sourceKey: 'Key001' },
    { id: 2, name: "Well02", type: 'rls', sourceKey: 'Key002' },
    { id: 3, name: "Well03", type: 'esp', sourceKey: 'Key002' },
    { id: 4, name: "Well04", type: 'rls', sourceKey: 'Key003' },
    { id: 5, name: "Well05", type: 'esp', sourceKey: 'Key003' },
  ];


  editWellInfo: any;
  toggleScreen: boolean = false;
  //editIndex: number = -1;
  //editMode: boolean = false;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.toggleScreen = (params.mode == "list")
    });


  }


  ngOnInit() {

  }

  onEdit(user: any, i: number) {
    // this.editIndex = i;
    this.editWellInfo = user;
    // this.editMode = true;
    this.toggleScreen = false;
  }


  addItem(event: any) {
    this.toggleScreen = true;
    var selItem = this.wellList.findIndex((obj => obj.id == event.id))
    if (selItem < 0) {
      event.id = this.wellList[this.wellList.length - 1].id + 1;
      this.wellList.push(event);
    }
    else {
      this.wellList[selItem] = event;
    }
  }


  applyStyle(type: string) {
    switch (type) {
      case "esp":
        {
          return 'table-warning'
        }
      case "rls":
        {
          return 'table-info'
        }
      default:
        return 'table-light';
    }
  }


}
