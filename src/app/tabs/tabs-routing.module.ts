import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "list",
        loadChildren: () =>
          import("../list/list.module").then((m) => m.ListPageModule),
      },
      {
        path: "About",
        loadChildren: () =>
          import("../about/about.module").then((m) => m.AboutPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/list",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/list",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
