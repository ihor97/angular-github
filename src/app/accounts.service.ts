import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// вказує на те що ми хочемо заінджектити щось в сервіс
@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
// якщо ми хочемо інджктити сервіс в сервіс, він мусить мати метадату
      constructor(private loggingService:LoggingService){

      }
      addAccount(name:string,status:string ) {
        this.accounts.push({ name,status});
        this.loggingService.logStatusChange(status)
      }
    
      updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus
        this.loggingService.logStatusChange(status)

      }
}