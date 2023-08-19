import { Component, OnInit } from '@angular/core';
import DataTable from 'datatables.net-dt';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    $('#myTable').DataTable();
  }

}
