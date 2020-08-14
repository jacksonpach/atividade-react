import React, { useEffect, useState } from 'react';
import api from './../services/api';
import { Container } from '@material-ui/core';

export default function Home() {

   const [users, setUsers] = useState([]);

   useEffect(() => {
      async function fetchData() {

         const response = await api.get('/user');
         setUsers(response.data);
      }
      fetchData();

   }, []);

   return (
      <>
         <Container component="main" maxWidth="xs">
            <h1>home</h1>
            <ul>
               {
                  users.map((user) =>
                     <div>
                        <li>{user.id}</li>
                        <li>{user.email}</li>
                        <li>{user.first_name}</li>
                        <li>{user.last_name}</li>
                        <li>{user.avatar}</li>
                     </div>
                  )
               }
            </ul>
         </Container>
      </>
   );
}
