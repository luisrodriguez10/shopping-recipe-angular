import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "../header/loading-spinner/loading-spinner.component";
import { LoggingService } from "../logging.service";
import { AlertComponent } from "./alert/alert.component";
import { DropDownDirective } from "./dropdown.directive";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropDownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropDownDirective,
    CommonModule
  ],
  providers: [LoggingService]
})
export class SharedModule{

}
