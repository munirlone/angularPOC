import { Component, Input } from "@angular/core";
import { ControlBase } from "src/app/Functions/controls";
import { ControlService } from "src/app/Services/control.service";

@Component({
  selector: "button-control",
  template: `
  <label class="form-label"> {{ _control.label }} </label><br>
  <button type="button" class="btn btn-success">Click me..</button>`,
})
export class ButtonComponent {
  @Input() _control: ControlBase;

  constructor(
    public controlService: ControlService
  ) { }

}
