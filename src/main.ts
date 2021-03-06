import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

// import { AppModule } from "./app/app.module";
import { AppRoutingModule } from "./app/app.routing.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppRoutingModule)
  .catch((err) => console.log(err));
