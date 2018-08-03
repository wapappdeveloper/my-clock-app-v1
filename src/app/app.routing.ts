import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'lazy', loadChildren: "./lazy/lazy.module#LazyModule" },
    { path: 'lazy1', loadChildren: "./lazy1/lazy1.module#Lazy1Module" }
];