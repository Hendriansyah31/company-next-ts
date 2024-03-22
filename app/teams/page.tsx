"use client"
import { useState, useEffect } from 'react'
import axios from "axios";
import { Result } from '../model/api';
import Image from 'next/image';


function Teams() {
  

  const URL = "https://randomuser.me/api/?results=100";
  const [users, setUsers] = useState <Result[]>([]);


  const addUser = () => {
    axios.get(URL)
    .then((response) => {
      console.log(response.data.result)
     setUsers([...response.data.results])
    })
  }

  useEffect(() => {
   addUser();
  },[])

  const element = (
  <>

  {
    users.map((u) => {
      return (
        <>
      
        <Image src={u.picture.medium} alt={u.name.first} width={50} height={50} />
        <div className='flex justify-around'>
        <p>{u.name.title}{u.name.first}{u.name.last} </p>
        <p>{u.email}</p>
        </div>
        <hr></hr>
        
        </>
      )
    })
  }
  
  </>

  );
  return element
}
export default Teams
