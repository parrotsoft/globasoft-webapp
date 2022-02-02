import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { PagesRoutingModule } from './pages-routing.module';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { TasksComponent } from './tasks/tasks.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { SharedsModule } from '../shareds/shareds.module';
import { ImageCardComponent } from './photo-gallery/components/image-card/image-card.component';
import { ItemTasksComponent } from './tasks/components/item-tasks/item-tasks.component';
import { HtmlMarkerComponent } from './map/components/html-marker/html-marker.component';


@NgModule({
  declarations: [
    PhotoGalleryComponent,
    TasksComponent,
    ContactComponent,
    MapComponent,
    ImageCardComponent,
    ItemTasksComponent,
    HtmlMarkerComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LeafletModule
  ]
})
export class PagesModule { }
