import { Component, Input } from "@angular/core";
import { ControlBase } from "src/app/Functions/controls";
import { ControlService } from "src/app/Services/control.service";

@Component({
  selector: 'footer-control',
  template: `  
  <label class="form-label"> {{ _control.label }} </label>
  <div class="card">
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Footer Title goes here..</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Description goes here..</cite></footer>
    </blockquote>
  </div>
</div>`

})

export class FooterComponent {

  @Input() _control: ControlBase;
  constructor(public controlService: ControlService) { }
}
