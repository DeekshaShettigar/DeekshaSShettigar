import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchInfoComponent } from './batch-info/batch-info.component';


const routes: Routes = [
  {path:"batch-details",component:BatchDetailsComponent},
  {path:"batch-info",component:BatchInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
