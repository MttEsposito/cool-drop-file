import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CoolDropDirective } from './app.directive';
import { FileSizeModule } from 'ngx-filesize';
@NgModule({
  declarations: [
    AppComponent,
    CoolDropDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FileSizeModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})

export class AppModule {

  constructor(
    private injector: Injector
  ) { }

  //bootsrtap the APP
  public ngDoBootstrap(): void {
    const element = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('cool-upload', element);
  }

}

