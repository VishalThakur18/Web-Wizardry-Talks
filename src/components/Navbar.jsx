import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { auth } from '../firebase'; 
import Logo from  "../img/logo.png";


export const Navbar = () => {
  const {currentUser} = useContext(AuthContext);

  
  const [showDetails, setShowDetails] = useState(false);

  const handleOnclick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="navbar">
      <div className="user">
        <img onClick={handleOnclick} src={currentUser.photoURL} alt="" />
        <span className="logo">
          Wizardry Talks
        </span>
        <div>
        <button className='btn2' onClick={()=>signOut(auth)}>

          Logout

        </button>
        </div>
      </div>

      {
          showDetails && (
            <div className='myProfile'>
              <p>{currentUser.displayName}</p>
              <p>Report a problem</p>
              <p>Private policy</p>
              <button style={{color:"Blue"}} onClick={()=>signOut(auth)}>Logout</button>
            </div>
          )
      }
    </div>
  )
}

export default Navbar;