import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit { 
  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log('Fils component : voici le contenu de la variable color de mon père',this.filsProperty);
  }
  sendEvent() {
    this.sendRequestToData.emit(
      ' I like it when you call me Seniorita '    
      );
  }

}
