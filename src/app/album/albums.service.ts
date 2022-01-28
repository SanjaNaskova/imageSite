import { HostListener, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from '../album';
import { Image } from '../image';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  constructor() { }

  albums: Album[] = [
    {
      name: "My Album one",
       images: [
      {author: "Alejandro Escamilla",
      download_url: "https://picsum.photos/id/1/5616/3744",
      height: 3744,
      id: 1,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      width: 5616},
      {
        author: "Paul Jarvis",
        download_url: "https://picsum.photos/id/10/2500/1667",
        height: 1667,
        id: 10,
        url: "https://unsplash.com/photos/6J--NXulQCs",
        width: 2500,
      },
      {
        author: "Danielle MacInnes",
        download_url: "https://picsum.photos/id/1001/5616/3744",
        height: 3744,
        id: 1001,
        url: "https://unsplash.com/photos/1DkWWN1dr-s",
        width: 5616
      },
      {
        author: "NASA",
        download_url: "https://picsum.photos/id/1002/4312/2868",
        height: 2868,
        id: 1002,
        url: "https://unsplash.com/photos/6-jTZysYY_U",
        width: 4312
      },
      {
        author: "Benjamin Combs",
        download_url: "https://picsum.photos/id/1008/5616/3744",
        height: 3744,
        id: 1008,
        url: "https://unsplash.com/photos/5L4XAgMSno0",
        width: 5616
      },
      {
        author: "Niko Virtanen",
        download_url: "https://picsum.photos/id/1024/1920/1280",
        height: 1280,
        id: 1024,
        url: "https://nikovirtanen.com",
        width: 1920
      },
      {
          author: "Philippe Wuyts",
          download_url: "https://picsum.photos/id/1016/3844/2563",
          height: 2563,
          id: 1016,
          url: "https://unsplash.com/photos/_h7aBovKia4",
          width: 3844
      },
      {
        author: "Patrick Fore",
        download_url: "https://picsum.photos/id/1019/5472/3648",
        height: 3648,
        id: 1019,
        url: "https://unsplash.com/photos/V6s1cmE39XM",
        width: 5472
      },
      {
        author: "Frances Gunn",
        download_url: "https://picsum.photos/id/1021/2048/1206",
        height: 1206,
        id: 1021,
        url: "https://unsplash.com/photos/8BmNurlVR6M",
        width: 2048
      }
    ],
     id: 1
    },

    {name: "My album two", images: [], id: 2},
    {name: "My album three", images: [], id: 3}   
  ];

  getAllAlbums(): Observable<Album[]>{
    const albumsObs = of(this.albums);
    return albumsObs;
  }

  getAlbumById(id: number){
   return this.albums.find(album => album.id === id);    
  }

  addImageToAlbums(image: Image, albumId: number ){
    const selectedAlbum = this.getAlbumById(albumId);
     selectedAlbum?.images.push(image)
  }

  @HostListener('click', ['$event.target'])
  closeMessage(target: any){
   if(target.tagName !== 'BUTTON'){
     console.log(target.tagName);
     (document.getElementById('message') as HTMLElement).style.display='none';
   }
  }
}
