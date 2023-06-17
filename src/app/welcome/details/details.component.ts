import { Component } from '@angular/core';
import { AnalyticsService } from 'src/app/shared/analytics.service';
import { HighlightDirective } from 'src/app/shared/highlight.directive';

@Component({
  standalone:true,
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  // ми видалили Shared Module і тепер імпортуємо просто директиву
  imports:[HighlightDirective]
})
export class DetailsComponent {
  constructor(private analyticsService: AnalyticsService) {}

  onClick() {
    this.analyticsService.registerClick();
  }
}
