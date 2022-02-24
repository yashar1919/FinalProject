import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {Route,Routes} from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

import Movies from './component/Movie/Movies';
import './component/Movie/Movie.css';

import Loadpage from './component/Movie/Loadpage';
import ShowMovie from './component/Movie/ShowMovie';



class App extends Component {
    state = { 
        m_movies:[
           
        ],
        name :'',
        poster:'',
        description :'',
        created :'',  
        searchname:'',
        searchcreated:''    ,
    
        IsMovieShow:true
     };

     componentDidMount() {
        axios
          .get("http://localhost:8000/api/read.php")
          .then((res) => {
            const m_movies = res.data;         
     

           this.setState({
              m_movies,
              name: "",
              poster: "",
              description: "",
              created: "",
            });
          })
          .catch((error) => console.log(error));
      };
      
      HandelOnclickRow = (name,poster,description,created)=>{
          // const navigate = useNavigate();
            this.setState({name});
            this.setState({poster});
            this.setState({description});
            this.setState({created});
          //  console.log(this.state.name);
          //  console.log(name);
          //  navigate('/ShowMovie');
      };
      
/*       ButtonShowMoviesHandler = () => {
        this.setState({ IsMovieShow: !this.state.IsMovieShow });
      }; */

     ButtonShowMoviesHandler = () => {
      axios
      .get("http://localhost:8000/api/read.php")
      .then((res) => {
        const m_movies = res.data;         
 

       this.setState({
          m_movies,
          name: "",
          poster: "",
          description: "",
          created: "",
        });
      })
      .catch((error) => console.log(error));                
    };    

    handelDeleteMovie = id => {
        const copymoive = [...this.state.m_movies];
        const filteredmovie = copymoive.filter(m => m.id !== id);
        this.setState({m_movies: filteredmovie});
    };

    handelEditMovie = (event,id) => {
        const editmovie = [...this.state.m_movies];
        const movieIndex= editmovie.findIndex(m => m.id=== id);
        editmovie[movieIndex].Name = event.target.value;
        this.setState({m_movies: editmovie});
    };

    handelNewMovie = ()=>{
        const addmovie= [...this.state.m_movies];
        const movieObj={
            name:this.state.name,
            poster: this.state.poster,
            description: this.state.description,
            created: this.state.created
        };

        addmovie.push(movieObj);
       // console.log(movieObj);
        axios.post('http://localhost:8000/api/create.php',JSON.stringify(movieObj), { headers: { "Content-Type": "application/json" } }).then(({ data, status }) => {
            console.log("فیلم با موفقیت ساخته شد.");
            toast.success("فیلم با موفقیت ساخته شد.", {
              position: "top-right",
              closeOnClick: true,
            });
            //  console.log(data);
          })
          .catch((ex) => {
            toast.error("مشکلی پیش آمده.", {
              position: "top-right",
              closeOnClick: true,
            });
            console.log(ex);
          });             
        
    };

    HandelSearchClick=()=>{
      const copymoive = [...this.state.m_movies];
      const filteredmovie = copymoive.filter(value =>{
        return (!this.state.searchname || value.name.toLowerCase().includes(this.state.searchname.toLowerCase()) )
        && (!this.state.searchcreated || value.created.toLowerCase().includes(this.state.searchcreated.toLowerCase()) )    
      });
      console.log(filteredmovie);
      this.setState({m_movies: filteredmovie});
    }    

    SetMovieName =(event)=>{
       this.setState({name: event.target.value});
    }    

    SetMoviePoster =(event)=>{
        this.setState({poster: event.target.value});
     }

     SetMovieCreated =(event)=>{
        this.setState({created: event.target.value});
     }    

     SetMovieDescription =(event)=>{
        this.setState({description: event.target.value});
     }    

     
    SetSearchName =(event)=>{
      this.setState({searchname: event.target.value});
   } 
   
   SetSearchCreated =(event)=>{
    this.setState({searchcreated: event.target.value});
   } 
    render() {
       
        const {m_movies,IsMovieShow} = this.state;

        const buttonStyle ={
            padding: "1rem",
            fontFamily: "BYekan",
            backgroundColor: "Pink"         
        };
        let Movie= <Movies movies={m_movies} DeleteMovie={this.handelDeleteMovie} edit={this.handelEditMovie} selectRow={this.HandelOnclickRow}/>
        let LoadPage=  <Loadpage Movie={Movie} name={this.state.name} poster={this.state.poster} description ={this.state.description} created={this.state.created} NewMovie={this.handelNewMovie} ShowMovies={this.ButtonShowMoviesHandler} setName={this.SetMovieName} setPoster={this.SetMoviePoster} setDescriptio={this.SetMovieDescription} setCreated={this.SetMovieCreated} setSearchName={this.SetSearchName} setSearchCreated={this.SetSearchCreated} searchOnclick={this.HandelSearchClick}></Loadpage>
      //  let ShowMovie = <ShowMovie name={this.state.name} poster={this.state.poster} description ={this.state.description} created={this.state.created} editmovie={this.handelEditMovie}></ShowMovie>   
     //  let ShowMovie = <ShowMovie></ShowMovie>   
     
        return (
            <div>
               <Routes>
                    <Route exact path="/" element= {LoadPage}>                   
                    </Route>
                    <Route  path="/ShowMovie" element={ <ShowMovie name={this.state.name} poster={this.state.poster} description ={this.state.description} created={this.state.created} ></ShowMovie>}  >                   
                    </Route>
                </Routes>                   
                    
            </div>
         
        );
    }
}
 
export default App;