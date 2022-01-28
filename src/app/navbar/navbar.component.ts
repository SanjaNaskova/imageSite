import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../album/albums.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  albums!: Album[];
  dropdown:boolean= false;


  constructor(
    private albumsService: AlbumsService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.albumsService.getAllAlbums().subscribe(data=>{
      this.albums = data;
    })
    
  }

  showDropdown(){
    this.dropdown = !this.dropdown;
  }

   isUserLogedIn(){
     return this.loginService.logedIn;
   }

}
