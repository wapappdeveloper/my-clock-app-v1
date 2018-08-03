import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  { path: 'loadme', component: LazyComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyComponent
  ]
})
export class LazyModule { }
