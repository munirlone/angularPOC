import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { WellListComponent } from './Components/well-list/well-list.component';
import { WellComponent } from './Components/well/well.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlTemplateComponent } from './Components/control-template/control-template.component';
import { DndModule } from 'ngx-dnd';
import { TextBoxComponent } from './Components/controls/textbox.component';
import { NumberBoxComponent } from './Components/controls/numberbox.component';
import { FooterComponent } from './Components/controls/footer.component';
import { TableComponent } from './Components/controls/table.component';
import { TimeComponent } from './Components/controls/time.component';
import { DividerComponent } from './Components/controls/divider.component';
import { MaskComponent } from './Components/controls/mask.component';
import { ButtonComponent } from './Components/controls/button.component';
import { SpinnerComponent } from './Components/controls/spinner.component';
import { DropDownComponent } from './Components/controls/dropdown.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    WellListComponent,
    WellComponent,
    ControlTemplateComponent,
    TextBoxComponent,
    NumberBoxComponent,
    FooterComponent,
    TableComponent,
    TimeComponent,
    DividerComponent,
    MaskComponent,
    ButtonComponent,
    SpinnerComponent,
    DropDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DndModule.forRoot(),
    NgxMaskModule.forRoot()
  ],
  exports: [BrowserModule, DndModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
