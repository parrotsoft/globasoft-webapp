import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './../shareds/layout/layout.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    children: [
      {
        path: 'photo-gallery',
        component: PhotoGalleryComponent
      },
      {
        path: 'tasks',
        component: TasksComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'map',
        component: MapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
