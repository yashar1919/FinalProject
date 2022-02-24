import React from "react";
import './ShowMovie.css';

const ShowMovie = ({name,poster,description,created,editMovie}) => {
    return ( <div className="movieCard" style={{alignItems: 'center'}}>
                <div>
                    <p style={{direction:"rtl"}}>{`نام:${name}`}                     
                    </p>    
                    <p style={{direction:"rtl"}}>{`توضیحات: ${description}`}                     
                    </p>   
                    <p style={{direction:"rtl"}}>{`سال ساخت: ${created}`}                     
                    </p>   
                    <img src={poster} />                               
                </div>
            {/* <input type="text" onChange={editMovie} placeholder={name}></input> */}
            </div>);
}
 
export default ShowMovie;