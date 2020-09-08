import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CvService} from '../cv.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  errorMessage = '';
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPersonne(formulaire: NgForm) {
    this.cvService.addPersonne(formulaire.value).subscribe(
      (response) => {
        const link = ['cv'];
        this.router.navigate(link);
      },
      (error) => {
        this.errorMessage = 'Probleme de connexion à votre serveur. Priere de consulter un administrateur';
        console.log(error);
      }
    )

    this.cvService.addPersonne(formulaire.value);

  }
}
