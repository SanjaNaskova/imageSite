import { Component, OnInit } from '@angular/core';
import { Image } from '../image';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../images.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {

  image!: Image;

  constructor(
    private route: ActivatedRoute,
    private imagesService: ImagesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getImageId();
  }

  getImageId(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.imagesService.getImageById(id)
    .subscribe( (img: Image) =>{
      this.image = img;
    })
  }

  goBack(){
    this.location.back();
  }
}
