import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule
  ],
  exports: [
    MatToolbarModule, MatSidenavModule, MatListModule, MatMenuModule, MatIconModule
  ]
})
export class MaterialModule {
}
