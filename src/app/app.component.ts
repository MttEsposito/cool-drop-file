// import the library angular
import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cool-upload',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class AppComponent implements OnInit {

  //input variable from the element 
  @Input() public multiple: any;
  @Input() public accept: string;
  @Input() public message: string;
  @Input() public onfiledrop: any;
  

  public modelFiles: any;
  public filesList: Array<any> = [];
  public hover: boolean = false;

  constructor(
    private cdRef:ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    if (this.multiple === "false") {
      this.multiple = false;
    }
    this.cdRef.detectChanges();
  }

  public openPicker(): void {
    document.getElementById("CoolDropInput").click();
    this.cdRef.detectChanges();
  }

  public onDrop(files: Array<FileList>): void {
    for (let file of files) {
      this.filesList.push(file);
    }
    this.modelFiles = null;
    if(this.onfiledrop){
      this.onfiledrop(this.filesList);
    }
    this.cdRef.detectChanges();
  }

  public onHover(isHovered: boolean): void {
    this.hover = isHovered;
    this.cdRef.detectChanges();
  }

  public removeItem(index:number) {
    this.filesList.splice(index, 1);
    this.cdRef.detectChanges();
  }
}
