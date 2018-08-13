import { NgModule } from '@angular/core';

import { MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatListModule,
         MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatCheckboxModule,
         MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule,
         MatProgressSpinnerModule, MatInputModule  } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
imports: [MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule,
          MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule,
          MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatTabsModule,
          MatCheckboxModule, MatToolbarModule, MatCardModule, MatFormFieldModule, MatProgressSpinnerModule,
          MatInputModule, MatPaginatorModule, MatExpansionModule],
exports: [MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatNativeDateModule,
          MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule,
          MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatTableModule, MatTabsModule, MatFormFieldModule,
          MatProgressSpinnerModule, MatInputModule, MatPaginatorModule, MatListModule, MatExpansionModule],
})

export class MyMaterialModule { }
