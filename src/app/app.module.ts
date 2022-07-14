import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";

@NgModule({
  declarations: [AppComponent, ProductComponent],
  imports: [BrowserModule, NgxPaginationModule],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule {}
