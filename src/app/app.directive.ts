import { Directive, HostListener, Output, EventEmitter } from "@angular/core";

@Directive({
    selector: '[cooldrop]'
})

export class CoolDropDirective {

    @Output() public dropped = new EventEmitter<FileList>();
    @Output() public hovered = new EventEmitter<boolean>();

    @HostListener('drop',['$event'])
    public onFileDrop($event:any){
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    }

    @HostListener('dragover', ['$event'])
    public onDragOver($event: any) {
        $event.preventDefault();
        this.hovered.emit(true);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave($event: any) {
        $event.preventDefault();
        this.hovered.emit(false);
    }


}