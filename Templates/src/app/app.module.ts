import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchInfoComponent } from './batch-info/batch-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BatchDetailsComponent,
    BatchInfoComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    ScheduleModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
