import { ControlService } from "../Services/control.service";
import { ControlBase } from "./controls";

export class ControlFunctions {

    position = 0;
    page = 1;

    constructor(public controlService: ControlService) {
    }

    addNewControl(controlType: string) {

        try {
            const control_id = Date.now() + this.controlService.formControls.length;
            this.position = this.controlService.formControls.length;
            this.page = 1;

            if (controlType)
                this.controlService.formControls.push(new ControlBase(control_id, controlType, controlType + '_' + control_id, controlType));


            this.controlService.formControls.forEach((control, i) => {
                control.position = i;
                this[i] = control;
            }, this);

            // tslint:disable-next-line: only-arrow-functions
            this.controlService.formControls.sort((a, b) => {
                return (a.position - b.position);
            });

            this.controlService.formControls.forEach(control => {
                if (Number(control_id) === Number(control.id)) {
                    this.controlService.selectedControl = control;
                }
            });


            // if (this.controlService.formOpenMode === 1) 
            {
                this.controlService.isHover = this.controlService.selectedControl ? this.controlService.selectedControl.position : -1;
                this.controlService.setPageWiseControls(this.controlService.formControls);
            }

            this.controlService.selectedPosition = false;
            return control_id;
        } catch (e) {
            console.log(e);

        }

    }



}
