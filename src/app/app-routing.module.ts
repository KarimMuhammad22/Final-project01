import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContainerComponent } from "./container/container.component";
import { RankComponent } from "./rank/rank.component";
import { ContainerRankProfileComponent } from "./container-rank-profile/container-rank-profile.component";
import { ContentProfileComponent } from "./container/content-profile/content-profile.component";

const routes: Routes = [
  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path: "",
        component: ContainerRankProfileComponent,
        children: [
          { path: "", component: ContentProfileComponent },
          { path: "rank", component: RankComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
