import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Personne } from 'src/app/Model/Personne';


@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne: Personne;
  @Output() selectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne() {
    // Todo emettre un évenement et y injecter la personne
    this.selectedPersonne.emit(
      this.personne
    );
  }

}
