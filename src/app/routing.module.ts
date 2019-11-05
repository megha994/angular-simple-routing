import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

import { Home } from './home.component';
import { DashBoard } from "./dashBoard.component";
import { Profile } from "./profile.component";

const routes: Routes = [
  { path: "home", component: Home },
  { path: "dashboard", component: DashBoard },
  { path: "profile", component: Profile }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


// export const routing = RouterModule.forRoot(routes);

export class RoutingModule {

}
