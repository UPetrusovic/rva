import { MatDialog } from '@angular/material/dialog';
import { UslugaService } from './../../services/usluga.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Usluga } from 'src/app/models/usluga';
import { Filijala } from 'src/app/models/filijala';
import { KorisnikUsluge } from 'src/app/models/korisnik-usluge';
import { UslugaDialogComponent } from 'src/app/dialogs/usluga-dialog/usluga-dialog.component';

@Component({
  selector: 'app-usluga',
  templateUrl: './usluga.component.html',
  styleUrls: ['./usluga.component.css']
})
export class UslugaComponent implements OnInit, OnDestroy, OnChanges {

  displayedColumns = ['id', 'naziv', 'opisUsluge', 'datumUgovora', 'provizija', 'filijala', 'korisnikUsluge', 'actions'];
  dataSource!: MatTableDataSource<Usluga>;
  subscription!: Subscription;

  @Input() childSelectedFilijala!: Filijala;
  constructor(private service: UslugaService, public dialog : MatDialog){
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadData();
  }

  ngOnInit(): void {
    this.loadData();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public loadData(){
    this.subscription = this.service.getUsluga(this.childSelectedFilijala.id).subscribe(
      data => {this.dataSource = new MatTableDataSource(data);
              console.log(data)}),
      (error:Error) => {console.log(error.name + ' ' + error.message);}
  }

  public openDialog(flag:number, id?:number, naziv?:string, opisUsluge?:string, datumUgovora?:Date, provizija?:number, filijala?:Filijala, korisnikUsluge?:KorisnikUsluge):void{
    const dialogRef = this.dialog.open(UslugaDialogComponent, {data:{id,naziv,opisUsluge,datumUgovora,provizija,filijala,korisnikUsluge}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.componentInstance.data.filijala = this.childSelectedFilijala;
    dialogRef.afterClosed().subscribe(
      result =>{
        if(result == 1){
          this.loadData();
        }
      }
    )
  }
  public applyFilter(filter:any) {
    filter = filter.target.value;
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }
}
