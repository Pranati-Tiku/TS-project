import { UserType } from "./User type"

type UserListprops={
    list:UserType[];
}
export const UserList=(props:UserListprops)=>{
    return <div>
        <table>
            <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                
            </tr>
            {props.list.map(user=>{

                console.log(user);
                return(
                    <tr key={user.id}>
                        <td className="border px-4 py-2">{user.name}</td>
                        <td className="border px-4 py-2">{user.email}</td>
                       
                    </tr>
                )
            })}
        </table>
    </div>
}