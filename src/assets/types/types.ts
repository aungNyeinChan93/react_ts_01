
type UserInfo = {
    name: string,
    age: number
};


type AdminInfo = UserInfo & {
    role: string,
    lastLogin: Date
};

export { type UserInfo, type AdminInfo }
