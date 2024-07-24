import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Banka } from 'src/app/models/banka';
import { BankaService } from 'src/app/services/banka.service';

@Component({
  selector: 'app-banka-dialog',
  templateUrl: './banka-dialog.component.html',
  styleUrls: ['./banka-dialog.component.css']
})
export class BankaDialogComponent {
  flag!: number;

  constructor(
    public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<Banka>,
    @Inject (MAT_DIALOG_DATA) public data: Banka,
    public service: BankaService
  ){ }

  public add() {
    this.service.addBanka(this.data).subscribe(
      (data) => {
        this.snackBar.open(`Banka sa imenom ${data.naziv} je uspesno dodata`, "U redu", {duration: 3500});
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open(`Neuspesno dodavanje!`, "Zatvori", {duration: 3500});
    }
  }

  public update() {
    this.service.updateBanka(this.data).subscribe(
      (data) => {
        this.snackBar.open(`Banka sa id ${data.id} je uspesno azurirana`, "U redu", {duration:3500});
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open(`Neuspesno azuriranje!`, "Zatvori", {duration:3500});
    }
  }

  public delete() {
    this.service.deleteBanka(this.data.id).subscribe(
      (data) => {
        this.snackBar.open(`Banka je uspesno obrisana`, "U redu", {duration:3500});
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
