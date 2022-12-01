import axios from 'axios';
import React from 'react'
import { useEffect, useState} from "react"
import { useParams } from 'react-router-dom';


function AdminCPengguna() {
    const api_url = "https://testvoluntegreen.onrender.com/users";
    const [apiUser, setApiUser] = useState([])
    const {_id} = useParams()
    
////ini jaga2 untuk getUser yang biasa testvoluntegreen
    const getUsersBE = async () => {
         axios.get(api_url)
        .then(res => 
        setApiUser(res.data.data),
        // console.log(res.data.data)
        )
        .catch((err) => console.log(err))
};

//ini untuk getUser deploy Fix API
// const getUsersBE = async () => {
//     axios.get('https://testvoluntegreen.onrender.com/users')
//    .then(res => 
//    setApiUser(res.data.data),
//    // console.log(res.data.data)
//    )
//    .catch((err) => console.log(err))
// };

    useEffect(() => {
    //  getUsers();
        getUsersBE();
    }, []);


    // ini abaikan aja
    // const getUsers = async () => {
    //     // ini untuk get API mock biasa yaw
    //     const response = await  axios.get(api_url)
    //         console.log(response.data)
    //         setApiUser(response.data)
    // };


    // ini untuk delete fix API
    // const deleteUser = async (_id) => {
    //     try {
    //         await axios.delete(`https://voluntegreen.onrender.com/admin/${_id}`);
    //         getUsersBE();
    //         console.log(_id)
    //     } catch (error){
    //         console.log(error);
    //     }
    // }

    // ini untuk delete test API BE
    const deleteUser = async (_id) => {
        try {
            await axios.delete(`https://testvoluntegreen.onrender.com/users/${_id}`)
            getUsersBE();
            console.log(_id + "  Deleted")
        } catch (err){
            console.log(err);
        }
    }

    return (
    <>
    
      {/* <!-- Begin Page Content --> */}
    <div className="crudd">

        {/* <!-- Page Heading --> */}
        <div className="ms-4">
            <h1 className="text-gray-800">Pengguna</h1>
        </div>


        {/* <!-- /.container-fluid --> */}
        <table className="table  table-columns my-table tablee">
            <thead >
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                {/* <th>Password</th> */}
                <th>Action</th>
            </tr>
            </thead>
            {apiUser.map((item, index) => ( 
            <tbody  key={index}>
            <tr>
                <td>{item._id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                {/* <td>123</td> */}
                <td><a onClick={() => deleteUser(item._id)}><i className="fa fa-trash" aria-hidden="true" title='Delete Akun'></i></a></td>
                
            </tr>
            {/* <tr>
                <td>2.</td>
                <td>Moe</td>
                <td>mary@example.com</td>
                <td>234</td>
                <td><a><i className="fa fa-trash" aria-hidden="true"></i></a></td>

            </tr> */}
            </tbody>
                ))}

    </table>

</div>


    </>
    )
}

export default AdminCPengguna