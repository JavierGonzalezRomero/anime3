import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllAnimeComponent } from './pages/all-anime/all-anime.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './pages/filter/filter.component';
import { GalleryComponent } from './shared/components/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    AllAnimeComponent,
    HomeComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
