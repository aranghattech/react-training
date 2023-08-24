import { useEffect, useState } from 'react';

export default function useLoginStatus()
{
     let isTokenExist = false;
     let [userStatus, setUserStatus] = useState(false);

     useEffect(() => {
          refreshUserStatus();
     },[]);

     function refreshUserStatus()
     {
          isTokenExist = localStorage.getItem('userStatus');
          setUserStatus(isTokenExist);
     }

     function alertUser(){
          alert("Login Successful");
     }

     return [userStatus,refreshUserStatus,alertUser];
}