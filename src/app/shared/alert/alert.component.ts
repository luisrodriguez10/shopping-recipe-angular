import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent{

  //message is coming from auth.component.ts
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }
}
