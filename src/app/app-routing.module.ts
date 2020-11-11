import { ItHurtsComponent } from './components/it-hurts/it-hurts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstAidKitComponent } from './components/first-aid-kit/first-aid-kit.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'firstAidKit', component: FirstAidKitComponent},
  { path: 'itHurts', component: ItHurtsComponent},
  { path: 'myPharmacy', component: PharmacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
