import { Injectable } from '@angular/core';
import { Image } from './image';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private imagesUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) { }

  getAllImages(){
    return this.http.get<Image[]>(this.imagesUrl);
  }

  getImageById(id: number){
    return this.http.get<Image>(`https://picsum.photos/id/${id}/info`);
  }



}
