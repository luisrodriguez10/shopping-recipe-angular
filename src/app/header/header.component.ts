import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    collapsed = true;
    //Output cause will be sent to the app component (parent)
    // @Output() featureSelected = new EventEmitter<string>();
    private userSub: Subscription;
    isAuthenticated = false;

    constructor(private dataStorageService: DataStorageService, private authService: AuthService){

    }

    ngOnInit() {
      this.userSub = this.authService.user.subscribe(user =>{
        //!user ? false : true === !!user
        this.isAuthenticated = !!user;
      });
    }

    onSaveData(){
      this.dataStorageService.storeRecipes();
    }

    onFetchData(){
      this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout(){
      this.authService.logout();
    }
    // onSelect(feature: string){
    //     //save feature selected on emit for featureSelected
    //     this.featureSelected.emit(feature);
    // }
    ngOnDestroy() {
      this.userSub.unsubscribe();
    }
}
