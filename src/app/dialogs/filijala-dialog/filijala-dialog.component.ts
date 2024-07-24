import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Banka } from 'src/app/models/banka';
import { Filijala } from 'src/app/models/filijala';
import { BankaService } from 'src/app/services/banka.service';
import { FilijalaService } from 'src/app/services/filijala.service';

@Component({
  selector: 'app-filijala-dialog',
  templateUrl: './filijala-dialog.component.html',
  styleUrls: ['./filijala-dialog.component.css']
})
export class FilijalaDialogComponent implements OnInit {
  flag!:number;
  banke!:Banka[];
  
  constructor(
    public snackBar:MatSnackBar,
    public dialogRef:MatDialogRef<Filijala>,
    @Inject (MAT_DIALOG_DATA) public data: Filijala,
    public service:FilijalaService,
    public bankaService:BankaService
  ) {}

  ngOnInit(): void {
    this.bankaService.getAllBankas().subscribe(
      (data)=> {
        this.banke = data;
      }
    )
  }

  public compare(a:any, b:any) {
    return a.id == b.id;
  }

  public add() {
    this.service.addFilijala(this.data).subscribe(
      (data) => {
        this.snackBar.open(`Uspešno dodata filijala sa ID: ${data.id}`, `U redu`,
          {duration: 2500});
      }
    ),
    (error:Error) => {
        console.log(error.name + ' ' + error.message);
        this.snackBar.open(`Neuspešno dodavanje`, `U redu`, {duration: 2500});
    }
  }
  public update() {
    this.service.updateFilijala(this.data).subscribe(
      (data) => {
        this.snackBar.open(`Uspešno ažurirana filijala sa ID: ${data.id}`, `U redu`,
        {duration: 2500});
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open(`Neuspešno ažuriranje`, `U redu`, {duration: 2500});
    }
  }

  public delete() {
    this.service.deleteFilijala(this.data.id).subscribe(
      (data) => {
        this.snackBar.open(`Uspešno brisanje`, `U redu`, {duration: 2500});
      }
    ),
    (error:Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open(`Neuspešno brisanje`, `U redu`, {duration: 2500});
    }
  }

  public cancel() {
    this.dialogRef.close();
    this.snackBar.open(`Odustali ste od izmena`, `U redu`, {duration: 2500});
  }
}
