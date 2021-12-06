import { Component, OnInit } from '@angular/core';
import { ControlFunctions } from 'src/app/Functions/control-functions';
import { ControlService } from 'src/app/Services/control.service';

@Component({
  selector: 'app-control-template',
  templateUrl: './control-template.component.html',
  styleUrls: ['./control-template.component.css']
})
export class ControlTemplateComponent implements OnInit {

  pageControls = [];
  objControlFunction: ControlFunctions;

  constructor(private controlService: ControlService) {
    this.objControlFunction = new ControlFunctions(controlService);
  }

  ngOnInit() {
  }

  dropControl($event: any) {
    this.objControlFunction.addNewControl($event.dragData);
  }


  dragstart(position: number) {
    this.controlService.isHover = this.controlService.selectedControl.position;
    this.controlService.tempFormControls = Object.assign([], this.controlService.formControls);
  }


  dragend(originPosition: number, c) {
    const targetPosition = this.controlService.isHover;
    const pb = 1;
    const originPage = c.page;
    let targetPage = 1;

    const prevControl = this.controlService.tempFormControls[targetPosition];
    if (prevControl.controlType === 'pagebreak') {
      targetPage = prevControl.page + 1;
    } else {
      this.controlService.formControls.forEach((control, i) => {
        if (i === Number(targetPosition)) {
          if (this.controlService.tempFormControls[i - 1] !== undefined &&
            this.controlService.tempFormControls[i - 1].controlType === 'pagebreak') {
            targetPage = this.controlService.tempFormControls[i - 1].page + 1;
          } else {
            targetPage = this.controlService.tempFormControls[i].page;
          }
        }
      });
    }

    this.controlService.formControls.forEach((control, i) => {
      control.position = i;
      if (Number(control.position) === Number(targetPosition)) {
        control.page = targetPage;
      }
      this[i] = control;
    }, this);

    this.controlService.isHover = this.controlService.selectedControl ? this.controlService.selectedControl.position : -1;

    this.controlService.setPageWiseControls(this.controlService.formControls);
  }


  deleteControl_OnClick(control: any) {
    for (let index = 0; index < this.controlService.formControls.length; index++) {
      if (this.controlService.formControls[index].id === control.id) {
        this.controlService.formControls.splice(index, 1);
        break;
      }
    }
  }

}
