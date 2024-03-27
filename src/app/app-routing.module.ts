import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs/tabs.page";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "tabs",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "list",
    loadChildren: () =>
      import("./list/list.module").then((m) => m.ListPageModule),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "details",
    loadChildren: () =>
      import("./details/details.module").then((m) => m.DetailsPageModule),
  },
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "list",
        loadChildren: () =>
          import("./list/list.module").then((m) => m.ListPageModule),
      },
      {
        path: "about",
        loadChildren: () =>
          import("./about/about.module").then((m) => m.AboutPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/list",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then((m) => m.SignupPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
