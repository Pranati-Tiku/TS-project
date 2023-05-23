import { useState } from "react"
import { PageEnum, UserType, dummyUser } from "./User type"
import { UserList } from "./UserList"
import { AddUser } from "./AddUser"
export const Home=()=>{
    const [userList, setuserList] = useState(dummyUser as UserType[])
    const [addPage, setAddPage] = useState(PageEnum.list)
    return <>
    <article>
        <header><h1 className="text-white p-5 bg-black text-xl border-transparent text-center border-2 mb-4">
            Add Users Appliation
        </h1>
        </header>
       
    </article>
    <section>
            <div className=" w-full mx-auto text-center">
            {addPage===PageEnum.list && 
            <div className="">
            <button className="border border-gray-400 p-2 " onClick={()=>{
                setAddPage(PageEnum.add)
            }}>Add User</button>
            <UserList list={userList}/>
            </div>}
            {addPage===PageEnum.add && <AddUser onBackButtonClick={()=>{
                setAddPage(PageEnum.list)
            }} onAddUser={
                (data:UserType)=>{
                    setuserList([...userList,data])
                }
            }/>}
           
            </div>
          
        </section>
    </>
}