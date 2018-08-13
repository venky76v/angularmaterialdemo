import { MyMaterialModule } from './../material.module';
import { Starwarschars } from '../starwarschars';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { MatTableDataSource, MatDividerModule, MatListModule, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StarwarsFilms } from '../StarwarsFilms';
import { PlanetNameDialogComponent } from '../planet-name-dialog/planet-name-dialog.component';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})

export class StarwarsComponent implements OnInit {
  loading = true;
  characterName: string = '';
  people: any;
  films: any;
  starWarFilms: StarwarsFilms[] = new Array<StarwarsFilms>();
  dataSource = new MatTableDataSource<StarwarsFilms>(this.starWarFilms);
  displayedColumns = ['title', 'director', 'episode_id', 'created'];
  filmDetails: any;
  starShips: any;
  startwarsChars: Starwarschars[];
  fileNameDialogRef: MatDialogRef<PlanetNameDialogComponent>;

  constructor(private http: HttpClient, private dialog: MatDialog) {
      setTimeout(() => {
        this.loading = false;
      });
   }

   getCharacterDetails() {
     this.starWarFilms = new Array<StarwarsFilms>();
     this.http.get('https://swapi.co/api/people/' + this.characterName)
              .subscribe((response) => {
                this.people = response;
                this.films = this.people.films;
                console.log(this.films);
                this.films.forEach(film => {
                  console.log(film);
                  this.http.get(film)
                           .subscribe((resFilm) => {
                             this.filmDetails = resFilm;
                             this.starWarFilms.push(
                               {
                                'title': this.filmDetails.title,
                                'director': this.filmDetails.director,
                                'episode_id': this.filmDetails.episode_id,
                                'created': this.filmDetails.created
                               });
                           });
                });
              });
   }

   ngOnInit(): void {
  }

  openDialog(planetURL: string) {
    this.fileNameDialogRef = this.dialog.open(PlanetNameDialogComponent, {data: {planeturl: planetURL }});
  }
}
