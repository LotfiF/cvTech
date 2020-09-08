import { Component, OnInit } from '@angular/core';
import { Personne } from '../../Model/Personne';
import {PremierService} from '../../premier.service';
import {CvService} from '../cv.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit(): void {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },

      (error)  => {
      alert('Problème d\'acces à l api et les données affichées sont fake');
      console.log(error);
      this.personnes = this.cvService.getFakePersonne();
      }
    );
  }

  selectPersonne(personne) {
    this.selectedPersonne = personne;
  }
}

