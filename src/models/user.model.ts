export interface User extends Document{
    dni: string;
    password: string;
    email: string; 
    fullname: string;
}