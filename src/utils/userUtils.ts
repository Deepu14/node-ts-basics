import type { User } from '../types/user.js';

export const isValidUser = (user: User): boolean => {
    return typeof user.name === 'string' && user.name.trim().length > 0 &&
           typeof user.age === 'number' && user.age > 0;
};

export const filterUsersByAge = (users: User[], minAge: number, maxAge: number): User[] => {
    return users.filter(u => u.age >= minAge && u.age <= maxAge);
};

export const sortUsersByName = (users: User[]): User[] => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
