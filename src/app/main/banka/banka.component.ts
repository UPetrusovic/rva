import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BankaDialogComponent } from 'src/app/dialogs/banka-dialog/banka-dialog.component';
import { Banka } from 'src/app/models/banka';
import { BankaService } from 'src/app/services/banka.service';

@Component({
  selector: 'app-banka',
  templateUrl: './banka.component.html',
  styleUrls: ['./banka.component.css']
})
export class BankaComponent implements OnInit, OnDestroy {

    displayedColumns = ['id', 'naziv', 'kontakt', 'pib', 'actions'];
    dataSource!: MatTableDataSource<Banka>;
    subscription!: Subscription;
    @ViewChild(MatSort, {static:false}) sort!:MatSort;
    @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;
    constructor (private service:BankaService, public dialog:MatDialog) {}
  
    ngOnInit(): void {
  this.loadData();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

    public loadData() {
      this.subscription = this.service.getAllBankas().subscribe(
        (data) => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      ),
      (error: Error) => {
        console.log(error.name + ' ' + error.message);
      }
    }

    public openDialog(flag:number, id?:number, naziv?:string, kontakt?:string, pib?:number) {
      const dialogRef = this.dialog.open(BankaDialogComponent, {data: {id, naziv, kontakt, pib}});
      dialogRef.componentInstance.flag = flag;
      dialogRef.afterClosed().subscribe(
        (result) => {
          (result ==1)
          this.loadData();
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
