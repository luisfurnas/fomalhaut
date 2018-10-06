import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class MaterialModule {
}
