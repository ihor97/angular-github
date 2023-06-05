
export class User{
    constructor(public email:string,public id:string, private _token:string,private _tokenExpirationDate:Date){

    }
    // в токен типу так user.token ми нічого не можемо присвоїти так як це є геттер
    get token(){
// new Date() > this._tokenExpirationDate якщо він існує але вийшов його термін
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null
        }
        return this._token
    }
}