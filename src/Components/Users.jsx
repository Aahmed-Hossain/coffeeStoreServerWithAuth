import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const User = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);

    const handleDelete = id => {
        // make sure user is confirmed to delte
        fetch(`https://coffee-store-server-side-3sr79axfy-ahmed-hossains-projects.vercel.app/user/${id}`,{method:'DELETE'})
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted successfully');
                // remove the user from UI 
                const remainingUser = users.filter(user => user._id !==id);
                setUsers(remainingUser);
            }
        })
    }
    return (
        <div>
            <h2>Users:{loadedUser.length}
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>SL.</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user?.email}</td>
            <td>{user?.createdAt}</td>
            <td>{user.lastLoggedAt}</td>
            <td><button
            onClick={()=> handleDelete(user._id)}
            className="btn"> X </button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
                
            </h2>
        </div>
    );
};

export default User;