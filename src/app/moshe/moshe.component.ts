import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moshe',
  templateUrl: './moshe.component.html',
  styleUrls: ['./moshe.component.css']
})
export class MosheComponent {
@Input({ required: false }) image="aaaa";
}

// child TS