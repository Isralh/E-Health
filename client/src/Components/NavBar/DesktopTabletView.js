// import React from 'react'
// import Heading from './Heading'
// import { Link } from 'react-router-dom'
// import { LinkStyle, DesktopLinkStyle } from './LinkStyle'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

// const DesktopTabletView = ({ userStatus, handleDropDown, showDropDown, currentUser, userName, handleLogOut }) => {

//   return (
//     <nav className='tabletDesktop-nav'>
//       <Heading />
//       <div className='menu'>
//         <ul>
//           <li className='menu-list'><Link to='/' style={DesktopLinkStyle} className='menu-link'>Home</Link></li>
//           <li className='menu-list'><Link to='/bookAppointment' style={DesktopLinkStyle} className='menu-link'>Book Appointment</Link></li>
//           <li className='menu-list'><Link to='/createAccount' style={DesktopLinkStyle} className='menu-link'>Register</Link></li>
//           {userStatus === null
//             ? <>
//               <li className='menu-list'><a className='menu-link' style={DesktopLinkStyle}>Login</a>
//                 <div className='choice-menu'>
//                   <li className='login-choice'><Link to='/provider/login' style={DesktopLinkStyle}>Provider</Link></li>
//                   <li className='login-choice'><Link to='/customer/login' style={DesktopLinkStyle}>Customer</Link></li>
//                 </div>
//               </li>
//               </>
//             : currentUser.role === 'provider'
//               ? <>
//                 <li className='menu-list'><a className='menu-link' style={DesktopLinkStyle}>{`Welcome ${userName}`} <FontAwesomeIcon icon={faCaretDown} /></a>
//                   <div className='logged-menu'>
//                     <li className='user-choice'><Link to='/provider/dashboard' style={DesktopLinkStyle}>Dashboard</Link></li>
//                     <li className='user-choice'><Link to='/provider/profile' style={DesktopLinkStyle}>Profile</Link></li>
//                     <li className='user-choice'><Link to='/' style={DesktopLinkStyle} onClick={handleLogOut}>LogOut</Link></li>
//                   </div>
//                 </li>
//                 </> : currentUser.role === 'customer'
//                 ? <>
//                   <li className='menu-list'><a className='menu-link' style={DesktopLinkStyle}>{`Welcome ${userName}`} <FontAwesomeIcon icon={faCaretDown} /></a>
//                     <div className='logged-menu'>
//                       <li className='user-choice'><Link to='/customer/dashboard' style={DesktopLinkStyle}>Dashboard</Link></li>
//                       <li className='user-choice'><Link to='/customer/profile' style={DesktopLinkStyle}>Profile</Link></li>
//                       <li className='user-choice'><Link to='/' style={DesktopLinkStyle} onClick={handleLogOut}>LogOut</Link></li>
//                     </div>
//                   </li>
//                 </>
//                 : null}
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default DesktopTabletView
