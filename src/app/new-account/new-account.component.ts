import { Component, EventEmitter, Output, inject } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // тут вказується як ангулару створити інстанс сервіса

  // так як ми створюємо ще один інстанс AccountsService то це буде 
  // уже зовсім інший інстанс не той що в AppComponent і ми будемо пушити 
  // нові акаунти в не той інстанс що треба так що вони рендеритися не будуть
  // для того щоб це виправити треба забрати AccountsService з провайдерів
  providers:[LoggingService]
})
export class NewAccountComponent {
// ангулар створює сам інстанс намне треба створювати вручну
// альтернативний варіант створення інстансу
private loggingService?: LoggingService;
private accountsService?:AccountsService;
  constructor() { 
    this.loggingService=inject(LoggingService)
    this.accountsService=inject(AccountsService)
  }
// поки що нічого працювати не буде
  onCreateAccount(name: string, status: string) {
    this.accountsService.addAccount(name,status)
    
    this.loggingService.logStatusChange(status)
  }
}
