import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { LoginComponent } from './login/login.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'details/:id', component: ImageDetailsComponent},
  {path: 'album/:id', component: AlbumComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
