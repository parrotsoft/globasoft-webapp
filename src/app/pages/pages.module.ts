import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { TasksComponent } from './tasks/tasks.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { SharedsModule } from '../shareds/shareds.module';
import { ImageCardComponent } from './photo-gallery/components/image-card/image-card.component';


@NgModule({
  declarations: [
    PhotoGalleryComponent,
    TasksComponent,
    ContactComponent,
    MapComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedsModule,
    HttpClientModule
  ]
})
export class PagesModule { }
