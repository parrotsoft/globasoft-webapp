import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {

  listImages: any = [];

  constructor(private imagesService: ImagesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.imagesService.list().subscribe((resp: any) => {
      this.listImages = resp.photos;
    });
  }

}
