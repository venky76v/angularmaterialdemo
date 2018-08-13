import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-planet-name-dialog',
  templateUrl: './planet-name-dialog.component.html',
  styleUrls: ['./planet-name-dialog.component.css']
})

export class PlanetNameDialogComponent implements OnInit {
  planetURL: string = '';
  planetData: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private http: HttpClient,
              public dialogRef: MatDialogRef<PlanetNameDialogComponent>) {
      this.planetURL = this.data.planeturl;
      this.http.get(this.planetURL)
               .subscribe((response) => {
                 this.planetData = response;
               });
   }
  ngOnInit() {
  }
}
