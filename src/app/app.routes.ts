import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { EmailComponent } from './components/email/email.component';
import { ClientsComponent } from './components/clients/clients.component';
import { LocationsComponent } from './components/locations/locations.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ReportsComponent } from './components/reports/reports.component';
import { BankServicesComponent } from './components/bank-services/bank-services.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'services', component: BankServicesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
