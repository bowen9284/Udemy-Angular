import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ItemComponent } from "./item/item.component";
import { ListComponent } from "./list/list.component";
import { StarWarsService } from "./star-wars.service";
import { LogService } from "./log.service";

@NgModule({
  declarations: [AppComponent, TabsComponent, ItemComponent, ListComponent],
  imports: [BrowserModule],
  providers: [StarWarsService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
