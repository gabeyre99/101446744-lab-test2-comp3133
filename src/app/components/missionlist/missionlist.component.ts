import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../../app/services/spacex.service';
import { Launch } from '../../../app/launch.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MissionfilterComponent],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private spacexService: SpacexService, private router: Router) {}

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void {
    this.spacexService.getAllLaunches().subscribe((data) => {
      this.launches = data;
    });
  }

  goToDetails(flightNumber: number) {
    this.router.navigate(['/mission', flightNumber]);
  }

  onYearSelected(year: string): void {
    if (!year.trim()) {
      this.loadAllMissions();
      return;
    }

    this.spacexService.getLaunchesByYear(year).subscribe((data) => {
      this.launches = data;
    });
  }
}