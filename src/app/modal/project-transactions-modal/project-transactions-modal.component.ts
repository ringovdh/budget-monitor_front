import {Component, Input, OnInit} from '@angular/core';
import {Project} from "../../projects/project";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-project-transactions-modal',
  templateUrl: './project-transactions-modal.component.html',
  styleUrls: ['./project-transactions-modal.component.css',
    '../../../assets/modal_form_layout.css']
})
export class ProjectTransactionsModalComponent implements OnInit {

  @Input() public project: Project;

  constructor(public ngbActiveModal: NgbActiveModal,
              private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  close() {
    this.ngbActiveModal.close('closed');
  }

}
