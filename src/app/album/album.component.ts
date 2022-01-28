import { Component, HostListener, OnInit } from '@angular/core';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from './albums.service';
import { Image } from '../image';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album!: Album;
  src!: string;
  imagesSelected: Image[] = [];

  imageAdd!: Image;

  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumsService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getSelectedAlbum();

  }

  getSelectedAlbum(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.album = this.albumService.getAlbumById(id) as Album;
    this.router.navigate(['/album', id])
    }

    removeImg(id: number){
      const image = this.album.images.find(img => img.id === id)as Image;
      this.imagesSelected.push(image);
    }

    addImage(id: number){
     this.imagesSelected = this.imagesSelected.filter(img => img.id !== id);
     console.log(this.imagesSelected)
    }

    goBack(){
      this.router.navigate(['/home']);
    }

    showMessage(){
      (document.getElementById('message') as HTMLElement).style.display='block';
    }

    @HostListener('click', ['$event.target'])
    closeMessage(target: any){
     if(target.tagName !== 'BUTTON'){
       console.log(target.tagName);
       (document.getElementById('message') as HTMLElement).style.display='none';
     }
    }

}
