import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LogInComponent } from "./container/log-in/log-in.component";
import { ContainerComponent } from "./container/container.component";
import { SliderComponent } from "./container/slider/slider.component";
import { SignUpComponent } from "./container/sign-up/sign-up.component";
import { SideBarComponent } from "./container/side-bar/side-bar.component";
import { ContentProfileComponent } from "./container/content-profile/content-profile.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  NgbPaginationModule,
  NgbAlertModule
} from "@ng-bootstrap/ng-bootstrap";
import { CardItemComponent } from "./container/content-profile/card-item/card-item.component";
import { ButtonComponent } from "./container/button/button.component";
import { RankComponent } from "./rank/rank.component";
import { ContainerRankProfileComponent } from "./container-rank-profile/container-rank-profile.component";
@NgModule({
  declarations: [
    AppComponent,

    NavBarComponent,
    LogInComponent,
    ContainerComponent,
    SliderComponent,
    SignUpComponent,
    SideBarComponent,
    ContentProfileComponent,
    CardItemComponent,
    ButtonComponent,
    RankComponent,
    ContainerRankProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
