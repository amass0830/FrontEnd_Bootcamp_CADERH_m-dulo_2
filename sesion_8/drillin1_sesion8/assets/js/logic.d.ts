type UserName = string;
type UserMail = string;
type UserPassword = string;
type LoginState = UserName | undefined;
declare enum TransactionState {
    Sucess = 0,
    Failure = 1
}
interface UserRegister {
    userName: UserName;
    userMail: UserMail;
    userPassword: UserPassword;
}
declare var logged_user: LoginState;
declare const balances: Map<string, number>;
declare const database: UserRegister[];
declare function general_menu(): void;
declare function logged_user_menu(): void;
declare function transaction_menu(callback: Function): void;
declare function logInUser(): LoginState;
declare function signUpUser(): void;
declare function userAlreadyExists(user: UserName): boolean;
declare function isRegisteredInDataBase(register: UserRegister): boolean;
declare function return_balance(): void;
declare function withdraw(amount: number): TransactionState;
declare function deposit(amount: number): void;
//# sourceMappingURL=logic.d.ts.map