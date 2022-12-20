import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    collapsed = true;
    //Output cause will be sent to the app component (parent)
    // @Output() featureSelected = new EventEmitter<string>();

    constructor(private dataStorageService: DataStorageService){

    }

    onSaveData(){
      this.dataStorageService.storeRecipes();
    }

    onFetchData(){
      this.dataStorageService.fetchRecipes().subscribe();
    }

    // onSelect(feature: string){
    //     //save feature selected on emit for featureSelected
    //     this.featureSelected.emit(feature);
    // }
}
