import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        component: RegisterPageComponent,
      },
      {
        path: '**',
        redirectTo: 'sign-up',
      }
    ],
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthRoutingModule {

}
