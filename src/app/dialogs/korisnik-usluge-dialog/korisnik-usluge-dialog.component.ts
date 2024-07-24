import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KorisnikUsluge } from 'src/app/models/korisnik-usluge';
import { KorisnikUslugeService } from 'src/app/services/korisnik-usluge.service';

@Component({
  selector: 'app-korisnik-usluge-dialog',
  templateUrl: './korisnik-usluge-dialog.component.html',
  styleUrls: ['./korisnik-usluge-dialog.component.css']
})
export class KorisnikUslugeDialogComponent {

    flag!:number;

    constructor(
      public snackBar: MatSnackBar,
      public dialogRef: MatDialogRef<KorisnikUsluge>,
      @Inject (MAT_DIALOG_DATA) public data: KorisnikUsluge,
      public service: KorisnikUslugeService
    ){ }

    public add() {
      this.service.addKorisnik(this.data).subscribe(
        (data) => {
          this.snackBar.open(`Korisnik sa imenom ${data.ime} ${data.prezime} je uspesno dodat`, "U redu", {duration: 3500});
        }
      ),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open(`Neuspesno dodavanje!`, "Zatvori", {duration: 3500});
      }
    }

    public update() {
      this.service.updateKorisnik(this.data).subscribe(
        (data) => {
          this.snackBar.open(`Korisnik sa id ${data.id} je uspesno azuriran`, "U redu", {duration:3500});
        }
      ),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open(`Neuspesno azuriranje!`, "Zatvori", {duration:3500});
      }
    }

    public delete() {
      this.service.deleteKorisnik(this.data.id).subscribe(
        (data) => {
          this.snackBar.open(`Korisnik je uspesno obrisan`, "U redu", {duration:3500});
        }
      ),
      (error:Error) => {
        console.log(error.name + ' ' + error.message);
      this.snackBar.open(`Neuspesno brisanje!`, "Zatvori", {duration: 3500});
      }
    }

    public cancel() {
      this.dialogRef.close();
      this.snackBar.open(`Odustali ste od izmene!`, "Zatvori", {duration:3500});
    }
  }
