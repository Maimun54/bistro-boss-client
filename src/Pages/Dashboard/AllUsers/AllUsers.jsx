import { useQueries, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const axiosSecure =useAxiosSecure()
    const {data:users=[]}=useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
       const res =await axiosSecure.get('/users')
       return res.data
        }
    })
    return (
        <div>
            <div className="flex justify-evenly py-5">
                <h2 className="text-3xl">All User</h2>
                <h2 className="text-3xl">Total User :{users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>Blue</td>
          </tr>)
      }
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;