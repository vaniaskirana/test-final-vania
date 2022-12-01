import React from 'react'
import AdminSideBar from './admincomponents/AdminSideBar'
import './admin.css'
import './adminscss/_topbar.scss'
import AdminCPengguna from './admincomponents/AdminCPengguna'
import AdminTopBar from './admincomponents/AdminTopBar'
import Login from '../Components/Logres/Login'

function AdminCrud() {
  const cekEmail = localStorage.getItem("account");
  const cekPassword = localStorage.getItem("pass");
  return (
    <>
     {!cekEmail && !cekPassword? (
      
      <Login/>
      
    ) : (
    <div className="page-top" id="adminpagee">
    
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">
        <AdminSideBar/>
        <AdminTopBar/>
        <AdminCPengguna/>

    </div>
    </div>
    )}
    </>
  )
}

export default AdminCrud