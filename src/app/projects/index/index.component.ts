import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import {BudgetPerCategory} from "../../entity/BudgetPerCategory";
import {
  BudgetTransactionsModalComponent
} from "../../modal/budget-transactions-modal/budget-transactions-modal.component";
import {
  ProjectTransactionsModalComponent
} from "../../modal/project-transactions-modal/project-transactions-modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
    '../../../assets/panel_layout.css']
})
export class IndexComponent implements OnInit {

  projects: Project[] = []
  size: number = 0

  constructor(public projectsService: ProjectsService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectsService.getAll().subscribe((data) => {
      this.projects = data;
      this.size = this.projects.length
    });
  }

  openTransactionsModal(project: Project) {
    const modalRef = this.modalService.open(ProjectTransactionsModalComponent)
    modalRef.componentInstance.project = project;
  }

}

