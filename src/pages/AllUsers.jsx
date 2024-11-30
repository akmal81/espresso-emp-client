import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import Swal from "sweetalert2";


const AllUsers = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    console.log(users);

    const handleDeleteUser = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                


                // delete from data base 
                fetch(`http://localhost:5000/user/${id}`,
                    {
                        method: 'DELETE'
                    }
                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              const remainingUsers = users.filter(user => user._id !==id);
                              setUsers(remainingUsers)
                        }
                    })
            }
        });


    }


    return (
        <>
            <section>
                <Header></Header>
                <div className="w-11/12 mx-auto mt-10">

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created at</th>
                                    <th>last Login</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}

                                {
                                    users.map(user => <tr key={user._id}>
                                        <th>1</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.createdAt}</td>
                                        <td>{user.lastSignInTime}</td>
                                        <td className="flex gap-4">
                                            <button onClick={() => handleDeleteUser(user._id)} className="btn bg-red-600 text-white">del</button>
                                            <button className="btn">edit</button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

        </>
    );
};

export default AllUsers;