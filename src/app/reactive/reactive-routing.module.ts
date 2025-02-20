import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { BasicPageComponent } from "./pages/basic-page/basic-page.component";
import { DynamicPageComponent } from "./pages/dynamic-page/dynamic-page.component";
import { SwitchesPageComponent } from "./pages/switches-page/switches-page.component";

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicPageComponent,
      },
      {
        path: 'dynamic',
        component: DynamicPageComponent,
      },
      {
        path: 'switches',
        component: SwitchesPageComponent,
      },
      {
        path: '**',
        redirectTo: 'basic',
      }
    ]
  },
  {
    path: 'switches',
    component: SwitchesPageComponent,
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
export class ReactiveRoutingModule {

}
