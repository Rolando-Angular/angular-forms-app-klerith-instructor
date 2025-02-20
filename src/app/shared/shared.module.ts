import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SideMenuComponent,
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    SideMenuComponent,
  ]
})
export class SharedModule { }
