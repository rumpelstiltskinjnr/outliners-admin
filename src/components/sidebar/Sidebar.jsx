import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from "react";

const Sidebar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top"> 
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">OutlinersAdmin</span>
        </Link>
        </div>

        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <DashboardIcon className='icon' /><span>Dashboard</span>
                </Link>
                </li>
                <p className="title">LIST</p>
         <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
                <li>
                    <CreditCardIcon className='icon'/><span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon'/><span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AnalyticsIcon className='icon'/><span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon'/><span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamIcon className='icon'/><span>System Health</span>
                </li>
                <li>
                     <PsychologyIcon className='icon'/><span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/><span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon'/> <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className='icon'/><span>Logout</span>
                 </li>
                 <p className="title">THEME</p>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
            <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
        </div>
    </div>
  )
}

export default Sidebar