import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css',
  '../../../assets/resume.layout.css']
})
export class ResumeComponent implements OnChanges {

  @Input() incoming: number;
  @Input() fixedOutgoing: number;
  @Input() outgoing: number;
  @Input() savings: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) { }
}
