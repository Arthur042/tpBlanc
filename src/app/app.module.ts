import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { DetailComponent } from './components/detail/detail.component';
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    DetailComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
