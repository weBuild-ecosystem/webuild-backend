export interface User extends Document{
    email: string;
    notifications: string[];
}