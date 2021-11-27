import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  {
    path: "",
    redirectTo: "listings",
    pathMatch: "full"
  },
  {
    path: "listings",
    loadChildren: () =>
      import("./listing/listing.module").then(m => m.ListingModule)
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },

  {
      path:"home",component:HomeComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
