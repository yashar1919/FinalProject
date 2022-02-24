
import React from "react";


const Loadpage = ({Movie ,name , poster ,description ,created,NewMovie,ShowMovies,setName,setPoster,setDescriptio,setCreated}) => {
    return (<div className="rtl text-center">
        <div className="alert-danger m-2 p-5">
        <h1 >فیلم ها</h1> 
        </div>
        <hr></hr> 
        <form className="form-inline justify-content-center" onSubmit={event=> event.preventDefault()}>
            <div className="movieCard input-group w-25">
                <p>  <input type="text" placeholder='نام'  style={{direction:"rtl"}} onChange={setName}  value={name}></input></p>
                <p>  <input type="text" placeholder='پوستر'  style={{direction:"rtl"}} onChange={setPoster} value={poster}></input></p>
                <p>  <input type="text" placeholder='توضیحات'  style={{direction:"rtl"}} onChange={setDescriptio} value={description}></input> </p>
                <p>  <input type="text" placeholder='سال ساخت'  style={{direction:"rtl"}}onChange={setCreated} value={created}></input> </p>
                <p> <button type="submit" onClick={NewMovie} className="btn btn-sm btn-success fa fa-plus-square input-group-prepend"></button></p>               
            </div>
        </form>
         <button onClick={ShowMovies} >نمایش</button>
         {/* <button>رفتن به صفه ی بعد</button> */}
         {Movie}            
        </div>
            );
}
 
export default Loadpage;