import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { Test1Component } from '../test1/test1.component';
import { Test2Component } from '../test2/test2.component';
import { ErrorComponent } from '../shared/error/error.component';

const routes: Routes = [ {
  path: '',redirectTo: 'test1', pathMatch: 'full' 
},
{
  path: 'test1',component: Test1Component, canActivate: [AuthGuard],
  data: { 
    page: 'test1',
    redirectPath: 'test1'
  }
},
{
  path: 'test2',component: Test2Component, canActivate: [AuthGuard],
  data: { 
    page: 'test2',
    redirectPath: 'test2'
  }
},
{
  path: 'test3', 
 loadChildren: '../test3/test3.module#Test3Module'
},
{
  path: 'error',component: ErrorComponent
 },
 { 
  path: '**', component: ErrorComponent, data: { error: 404 } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }


export const routingComponents = [Test1Component, Test2Component,  ErrorComponent];
