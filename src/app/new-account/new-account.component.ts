import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // тут вказується як ангулару створити інстанс сервіса
  providers:[LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();
// ангулар створює сам інстанс намне треба створювати вручну
// альтернативний варіант створення інстансу
private loggingService?: LoggingService;
  constructor() { 
    this.loggingService=inject(LoggingService)
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus)
  }
}
