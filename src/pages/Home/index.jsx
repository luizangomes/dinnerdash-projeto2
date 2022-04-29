import React from 'react'
import Table from '../../components/Table'
import {Pagination} from '../../components/Pagination'
import './styles.css'
function Home() {
    const [users] = [
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
      ];
    
    return ( 
        <div className='Home'>
        <head>
            <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
            <title>dinnerdash | Backoffice</title>
        </head>

        <body>
            <header className="header_responsive">
                <div className="upper_menu">
                    <h3>dinnerdash</h3>
                    <nav className="menu">
                        <a href="#">backoffice</a>
                        <a href="#">perfil</a>
                        <a href="#">sair</a>
                    </nav>
                </div>
                <div className="backoffice_header">
                    <h1>Backoffice</h1>
                    <p>Gerencie pedidos, refeições e mais.</p>
                </div>   
            </header>
            <nav className="backoffice_functions">
                <a href="#">Pedidos</a> 
                <a href="#">Usuários</a>
                <a href="#">Refeições</a>
                <a href="#">Categorias de Refeição</a>
            </nav>
                <div className='userTable'>
                    <Table/>
                </div>
            <div className = "footerDiv">       
            <footer>
                <span>dinnedarsh | todos os direitos reservados</span>
                <span>desenvolvido por LNG e Melo :)  </span>  
            </footer>
            </div>
        </body>
    </div>
  )
}

export default Home;
