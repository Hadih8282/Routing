import { IUser } from "./interfaces/app-interfaces";

export class UserService {

  public users: IUser[] = [
    { id: 1, name: 'Hadi', email: 'hadi@outlook.com'},
    { id: 2, name: 'Reza', email: 'reza@outlook.com'},
    { id: 3, name: 'Ali', email: 'ali@outlook.com'},
  ];
}
