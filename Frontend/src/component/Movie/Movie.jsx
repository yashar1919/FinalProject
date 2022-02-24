import React from "react";
import {useNavigate} from 'react-router-dom';


import './Movie.css';

const Movie = ({name,poster,description,created,DeleteMovie,editMovie,selectRow}) => {
    const navigate = useNavigate();

    return (
        
         <div className="movieCard" style={{alignItems: 'center'}} onClick={selectRow} >
             
                <div onClick={() => navigate('/ShowMovie')} >
                    <p style={{direction:"rtl"}}>{`نام:${name} توضیحات: ${description}  سال ساخت: ${created} `} 
                    <button onClick={DeleteMovie} style={{cursor : "pointer"}} >حذف</button> 
                    </p>  
                    <img src={poster} />                                 
                </div>
            {/* <input type="text" onChange={editMovie} placeholder={name}></input> */}
            </div>);
}
 
export default Movie;