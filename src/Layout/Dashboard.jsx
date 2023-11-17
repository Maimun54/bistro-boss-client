import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin =true;
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
         <ul className="menu">
          {
            isAdmin?<>
                   <li><NavLink to="/dashboard/adminHome">
                <FaHome></FaHome>
                Admin Home</NavLink>
           </li>
            <li><NavLink to="/dashboard/addItems">
                <FaUtensils></FaUtensils>
               Add Items</NavLink>
           </li>
            <li><NavLink to="/dashboard/manageItems">
               <FaList></FaList>
                Manage Items</NavLink>
           </li>
            <li><NavLink to="/dashboard/manageBookings">
               <FaBook></FaBook>
             Manage Bookings</NavLink>
           </li>
            <li><NavLink to="/dashboard/users">
                <FaUsers></FaUsers>
           All Users</NavLink>
           </li>
            </> 
            :
            <>
              <li><NavLink to="/dashboard/userHome">
                <FaHome></FaHome>
                User Home</NavLink>
           </li>
            <li><NavLink to="/dashboard/reservation">
                <FaShoppingCart></FaShoppingCart>
               Reservation</NavLink>
           </li>
            <li><NavLink to="/dashboard/cart">
                <FaCalendar></FaCalendar>
                My Cart</NavLink>
           </li>
            <li><NavLink to="/dashboard/review">
                <FaAd></FaAd>
              Add a Review</NavLink>
           </li>
            <li><NavLink to="/dashboard/bookings">
                <FaList></FaList>
              My Bookings</NavLink>
           </li>
            </>
          }
           <div className="divider "></div>

           {/* shared Nav Link */}
           <li><NavLink to="/">
                <FaHome></FaHome>
             Home</NavLink>
           </li>
           <li><NavLink to="/order/salad">
                <FaHome></FaHome>
             Menu</NavLink>
           </li>
           <li><NavLink to="/order/salad">
               <FaVoicemail></FaVoicemail>
             Contact</NavLink>
           </li>
            </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;