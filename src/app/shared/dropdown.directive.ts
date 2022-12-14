import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropDownDirective{
    ///Binds any property of the element (dropdown)
    @HostBinding('class.open') isOpen = false;

    //Listens to events on the DOM
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }

}