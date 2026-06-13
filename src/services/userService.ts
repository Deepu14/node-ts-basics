import type { User } from "../types/user.js";
const users: User[]=[{name:"ABC",age:20},{name:"DEF",age:25}];
const getUsers = ():User[]=> {
    return users;
};

const addUser = (user:User):User[]=>{
    users.push(user);   
    return users;
}

const deleteUser = (name:string)=>{
    const index = users.findIndex((user)=>{return user.name==name});
    if(index===-1)
    {
        console.log("not found");
        return null;
    }
    else
    {
        users.splice(index,1);
        return users;
    }
}

const resetUsers=():User[]=>{
    users.length=0;
    users.push({name:"ABC",age:20},{name:"DEF",age:25});
   return users;
}

export {getUsers,addUser,deleteUser,resetUsers};