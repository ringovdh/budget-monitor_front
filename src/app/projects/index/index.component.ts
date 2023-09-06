import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
    '../../../assets/panel_layout.css']
})
export class IndexComponent implements OnInit {

  projects: Project[] = []
  size: number = 0

  constructor(public projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.loadProjects();
  }


  loadProjects() {
    this.projectsService.getAll().subscribe((data) => {
      this.projects = data;
      this.size = this.projects.length
      console.log('v', data)
    });

  }
}

