import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    collapsed = true;
    //Output cause will be sent to the app component (parent)
    // @Output() featureSelected = new EventEmitter<string>();

    constructor(){

    }

    // onSelect(feature: string){
    //     //save feature selected on emit for featureSelected
    //     this.featureSelected.emit(feature);
    // }
}
