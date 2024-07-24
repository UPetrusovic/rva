import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './utility/about/about.component';
import { AuthorComponent } from './utility/author/author.component';
import { HomeComponent } from './utility/home/home.component';
import { UslugaComponent } from './main/usluga/usluga.component';
import { FilijalaComponent } from './main/filijala/filijala.component';
import { BankaComponent } from './main/banka/banka.component';
import { KorisnikUslugeComponent } from './main/korisnik-usluge/korisnik-usluge.component';
import { KorisnikUslugeDialogComponent } from './dialogs/korisnik-usluge-dialog/korisnik-usluge-dialog.component';
import { BankaDialogComponent } from './dialogs/banka-dialog/banka-dialog.component';
import { FilijalaDialogComponent } from './dialogs/filijala-dialog/filijala-dialog.component';
import { UslugaDialogComponent } from './dialogs/usluga-dialog/usluga-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthorComponent,
    HomeComponent,
    UslugaComponent,
    FilijalaComponent,
    BankaComponent,
    KorisnikUslugeComponent,
    KorisnikUslugeDialogComponent,
    BankaDialogComponent,
    FilijalaDialogComponent,
    UslugaDialogComponent
    


  ],
  imports: [
    MatSidenavModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
