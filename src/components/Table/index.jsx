import React, { useState } from "react";
import {Pagination} from '../../components/Pagination'
import "./styles.css";

import { Rows } from "../Rows";


export function Table() {
  

  const [users, setUsers] = useState([
    {id:1,first_name:"Lauren",last_name:"Shaxby",email:"lshaxby0@php.net",created_at:"16/10/2021"},
    {id:2,first_name:"Ardenia",last_name:"Paddingdon",email:"apaddingdon1@nsw.gov.au",created_at:"27/07/2021"},
    {id:3,first_name:"Renaldo",last_name:"Alenichev",email:"ralenichev2@ftc.gov",created_at:"10/06/2021"},
    {id:4,first_name:"Nichole",last_name:"OHeneghan",email:"noheneghan3@flavors.me",created_at:"28/06/2021"},
    {id:5,first_name:"Haywood",last_name:"Daintry",email:"hdaintry4@nhs.uk",created_at:"18/03/2021"},
    {id:6,first_name:"Leslie",last_name:"Daile",email:"ldaile5@vimeo.com",created_at:"23/05/2021"},
    {id:7,first_name:"Byrann",last_name:"Slorance",email:"bslorance6@kickstarter.com",created_at:"15/05/2021"},
    {id:8,first_name:"My",last_name:"Swendell",email:"mswendell7@moonfruit.com",created_at:"15/12/2021"},
    {id:9,first_name:"Brier",last_name:"Esson",email:"besson8@usa.gov",created_at:"14/03/2021"},
    {id:10,first_name:"Seth",last_name:"Piddle",email:"spiddle9@nationalgeographic.com",created_at:"20/10/2021"},
    {id:11,first_name:"Fer",last_name:"Piddle",email:"ferspiddle9@nationalgeographic.com",created_at:"20/10/2022"},
  ]);

  function removeUser(userId){
    let newUsers = [...users];
    for (let user of newUsers){
      if (user['id'] == userId){
        newUsers.splice(newUsers.indexOf(user), 1);
      }
    }
    setUsers(oldUsers => newUsers);
  }

  const [page,setPage] = useState(1);

  function nextPage(){
    if (page < 3){
    setPage(page+1);
    }
  }
  function previousPage(){
    if (page > 1){
    setPage(page-1);
    }
  }
  function changePage(n){
    setPage(n);
  }

  function loadElements(){
    const button1= document.getElementById("button-1");
    const button2 = document.getElementById("button-2"); 
    const button3 = document.getElementById("button-3");
    for (let i of [1,2,3]){
      if (currentPage == 1){
        button1.style.cssText = "background-color:#cccccc;";
        button2.style.cssText = "background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));";
        button3.style.cssText = "background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));";
      }
      if (currentPage == 2){
        button1.style.cssText = "background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));";
        button2.style.cssText = "background-color:#cccccc;";
        button3.style.cssText = "background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));";
      }
      if (currentPage == 3){
        button1.style.cssText = "background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));";
        button2.style.cssText = "background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));";
        button3.style.cssText = "background-color:#cccccc;";
      }
    }
  }
  
  
  let totalUsers = users.length;
  let visibleUsers = [];
  let usersPerRow= 5;
  let currentPage = page;
  

    visibleUsers =  [];
    
    for(let i = usersPerRow*(currentPage-1); i < usersPerRow*currentPage; i++){
      if (i < totalUsers){
      visibleUsers.push(users[i]);
      }
    }
  
  
  

  return(
  
  <div className='table'>
    
    <div className="scroll_responsive">
      <table className="table_responsive">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Cadastrado em</th>
            <th>  </th>
          </tr>
            {visibleUsers.map(user =>(<Rows onDelete={removeUser} index={user.id} name={user.first_name + " " + user.last_name} email={user.email} created_at={user.created_at}/>))}
        </thead>
      </table>
    </div>
    <p class = "current-page">{page}</p>
    <Pagination nextPage = {nextPage} previousPage = {previousPage} changePage = {changePage}></Pagination>
   
   </div>
   
  )
};

export default Table;