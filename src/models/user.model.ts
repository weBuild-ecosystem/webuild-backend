export interface User extends Document{
    _id: string
    dni: string;
    password: string;
    email: string; 
    fullname: string;
    phone: string;
    entities: String[];
}