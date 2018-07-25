import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { Ng2OdometerModule } from 'ng2-odometer';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';

import { ClientsComponent } from './components/clients/clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppRouters } from './app.routes';
import { EmailComponent } from './components/email/email.component';
import { LocationsComponent } from './components/locations/locations.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ReportsComponent } from './components/reports/reports.component';
import { LineGraphComponent } from './components/reports/line-graph/line-graph.component';
import { BarGraphComponent } from './components/reports/bar-graph/bar-graph.component';
import { DoughnutGraphComponent } from './components/reports/doughnut-graph/doughnut-graph.component';
import { PolarGraphComponent } from './components/reports/polar-graph/polar-graph.component';
import { DashlineGraphComponent } from './components/dashboard/dashline-graph/dashline-graph.component';
import { BankServicesComponent } from './components/bank-services/bank-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ClientsComponent,
    DashboardComponent,
    EmailComponent,
    LocationsComponent,
    CalculatorComponent,
    ReportsComponent,
    LineGraphComponent,
    BarGraphComponent,
    DoughnutGraphComponent,
    PolarGraphComponent,
    DashlineGraphComponent,
    BankServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouters,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    FlexLayoutModule,
    MatDividerModule,
    Ng2OdometerModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
