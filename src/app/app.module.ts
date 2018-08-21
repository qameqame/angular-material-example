import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatFormFieldModule, MatDialogModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { DialogComponent } from './editor/dialog/dialog.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditorComponent, DialogComponent]
})
export class AppModule { }


