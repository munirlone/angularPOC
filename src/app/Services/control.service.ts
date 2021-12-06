import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// export class ControlService {

//   constructor() { }
// }
export class ControlService {

  constructor() {
  }
  // in case of edit form id has to be known first
  // formId: string;
  form: any;
  formControls: any[] = [];
  tempFormControls: any[] = [];
  pageWiseControls = { 1: [] };
  controlPosition = -1;

  isHover;
  selectedControl: any;
  selectedPosition: boolean;
  captchaDisable: boolean;


  exists(control, pageControls) {
    // console.log(control);
    // console.log(pageControls);
    let found = false;
    for (let i = 0; i < pageControls.length; i++) {
      if (pageControls[i].id === control.id) {
        found = true;
        break;
      }
    }
    // console.log(found);
    return found;
  }


  setPageWiseControls(controlsData: any[]) {

    let arr = [];
    let pBreaks = [];
    this.pageWiseControls = { 1: [] };
    for (let looper = 0; looper < controlsData.length; looper++) {

      arr = this.pageWiseControls[controlsData[looper]['page']];
      if (!arr && arr === undefined) {
        arr = [];
      }
      if (!this.exists(controlsData[looper], arr)) {
        // tslint:disable-next-line:prefer-const
        let arrLen = arr.length;
        if (arrLen > 0) {
          // tslint:disable-next-line:prefer-const
          let lastElement = arr[arr.length - 1];
          if (lastElement.controlType === 'pageBreak') {
            let indexToInsert = arrLen - 1;
            if (arrLen > 1) {
              indexToInsert = arrLen - 2;
            }
            arr.splice(indexToInsert, 0, controlsData[looper]);
          } else {
            arr.push(controlsData[looper]);
          }
        } else {
          arr.push(controlsData[looper]);
        }
      }

      // tslint:disable-next-line: only-arrow-functions
      arr.sort((a, b) => {
        return (a.position - b.position);
      });
      this.pageWiseControls[controlsData[looper]['page']] = arr;
    }

    const lastControl = controlsData[controlsData.length - 1];
    if (lastControl !== undefined && lastControl.controlType === 'pagebreak') {
      const pages = Number(lastControl.page);
      let pCount = 0;
      for (const p in this.pageWiseControls) {
        pCount++;
      }
      if (pCount === pages) {
        this.pageWiseControls[pages + 1] = [];
      }
    }
  }


}
