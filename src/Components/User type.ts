export interface UserType{
    id:string,
    name:string,
    email:string
}
export const dummyUser:UserType[]=[{
    id:new Date().toString(),
    name:'New User',
    email:'user@gmail.com'

}]
export enum PageEnum{
    list,add
}