import { Component, OnInit, HostListener } from '@angular/core';
import { Album } from '../album';
import { AlbumsService } from '../album/albums.service';
import { Image } from '../image';
import { ImagesService } from '../images.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allImages!: Image[];
  src!: string;
  imageSelected!: Image;
  dropdown: boolean = false;

  allAlbums!: Album[];
  selectedAlbumsIds: number[] = [];
  option: string = 'new';

  constructor(
    private imagesService: ImagesService,
    private albumService: AlbumsService
    ) { }

  ngOnInit(): void {

   this.imagesService.getAllImages().subscribe(data => {
     this.allImages = data;
     console.log(data)
   });

   this.getAllAlbums();
  }

  getAllAlbums(){
    this.albumService.getAllAlbums().subscribe( data=>{
      this.allAlbums = data;
    })
  }

  openModal(event: any, image: Image){
    console.log(event)
    event.stopPropagation();
    event.preventDefault();
    (document.getElementById('modal') as HTMLElement).style.display='block';
    this.imageSelected = image;
  }

  showOptionsForAdd(option: string){
    if(option === 'existing'){
      return this.option = "existing"
    }
    else{
      return this.option = "new"
    }
  }

  addOrRemoveAlbum(albumId: number){
   
    if(this.selectedAlbumsIds.includes(albumId)){
     this.selectedAlbumsIds = this.selectedAlbumsIds.filter(num => num !== albumId)
    }else{
      this.selectedAlbumsIds.push(albumId);
    }
  }

  saveImgToAlbums(){
    for (let index = 0; index < this.selectedAlbumsIds.length; index++) {
     this.albumService.addImageToAlbums(this.imageSelected, this.selectedAlbumsIds[index])     
    }
    (document.getElementById('modal') as HTMLElement).style.display='none';
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
