import React from 'react'
import AdminSideBar from './admincomponents/AdminSideBar'
import './admin.css'
import './adminscss/_topbar.scss'
import AdminTopBar from './admincomponents/AdminTopBar'
import AdminDashboard from './admincomponents/AdminDashboard'

function AdminPage() {
  return (
    <div className="page-top" id="adminpagee">
    
    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">
        <AdminSideBar/>
        <AdminTopBar/>
        <AdminDashboard/>
    </div>
    </div>
  )
}

export default AdminPage