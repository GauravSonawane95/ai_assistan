import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueaiComponent } from './blueai/blueai.component';
import { FormattingPipe } from './formatting.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BlueaiComponent,
    FormattingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule
    
 
  ],
  providers: [FormattingPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
