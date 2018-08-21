import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComponent } from './dialog.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatDialog, MatFormFieldModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '../../../../node_modules/@angular/material';
import { BrowserAnimationsModule } from '../../../../node_modules/@angular/platform-browser/animations';
import { NgModule } from '../../../../node_modules/@angular/core';

@NgModule({
  entryComponents: [DialogComponent]
})
export class FakeTestDialogModule { }

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let dialog: MatDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule,
        FakeTestDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],

    })
      .compileComponents();

    dialog = TestBed.get(MatDialog);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('show dialog', () => {
    expect(component).toBeTruthy();

    const config = {
      data: {
        animal: 'animal-data',
        name: 'name-data'
      }
    };
    dialog.open(DialogComponent, config);

  });
});
