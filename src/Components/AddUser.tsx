import { useState } from "react"
import { UserType } from "./User type"
 
type AddUserProps={
    onBackButtonClick:()=>void
    onAddUser:(data:UserType)=>void
}
export const AddUser=(props:AddUserProps)=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    return(
        <>
        <form onSubmit={(e:any)=>{
            e.preventDefault()
            const data:UserType={
                id:new Date().toString(),
                name:name,
                email:email,
            }
            // console.log(data);
            props.onAddUser(data)
            props.onBackButtonClick();
        }}>
            <div className="text-xl font-bold p-4">
                Add User Form
            </div>
            <div className="p-2 ">
                <label>Enter Name </label>
                <input className='border border-gray-300 rounded' type="text" value={name} onChange={(e:React.FormEvent<HTMLInputElement>):void=>{
                    setName(e.currentTarget.value)
                }}></input>
            </div>
            <div className="p-2 mb-4">
                <label>Enter Email </label>
                <input className='border border-gray-300 rounded' type="text" value={email} onChange={(e:React.FormEvent<HTMLInputElement>):void=>{
                    setEmail(e.currentTarget.value)
                }}/>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
                <button className="border border-gray-400 font-bold py-2 px-4 rounded " onClick={props.onBackButtonClick}>BACK</button>
                <input className="border border-gray-400 font-bold py-2 px-4 rounded " type="submit" value="ADD"/>
            </div>
        </form>
        </>
    )
}