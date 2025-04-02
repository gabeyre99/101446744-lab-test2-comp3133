import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css'],
})
export class MissionfilterComponent {
  @Output() yearSelected = new EventEmitter<string>();
  year: string = '';

  filterMissions() {
    this.yearSelected.emit(this.year);
  }
}