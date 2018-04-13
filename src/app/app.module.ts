import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ShortProfileComponent } from './shortProfile/shortProfile.component';
import { SimilarListComponent } from './simliarlist/simllarlist.component';
import { NameLabel } from './pipes/name-label.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ShortProfileComponent,
    SimilarListComponent,
    NameLabel,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
