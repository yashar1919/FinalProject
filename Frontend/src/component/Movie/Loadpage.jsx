
import React from "react";


const Loadpage = ({Movie ,name , poster ,description ,created,NewMovie,ShowMovies,setName,setPoster,setDescriptio,setCreated,setSearchName,setSearchCreated,searchOnclick}) => {
    return (
    <div className="rtl text-center">
        <div id="header" className="alert-danger m-2 p-5">
        <h1 >فیلم ها</h1> 
        </div>
        
        <hr></hr> 
        <div className="moviesearch input-group">
            <h5>
                شما میتوانید از این قسمت فیلم مورد نظر خود را جستجو کنید.
            </h5>
                    <p>  <input type="text" placeholder='نام'  style={{direction:"rtl"}}  onChange={setSearchName}  /*value={name}*/></input></p>
                    <p>  <input type="text" placeholder='سال'  style={{direction:"rtl"}} onChange={setSearchCreated} /*value={created}*/></input></p>
                    <p> <button id="search_btn" type="submit" onClick={searchOnclick}>جستجو</button></p>               
            </div>

            <hr></hr>
        <form className="form-inline justify-content-center" onSubmit={event=> event.preventDefault()}>
           
            <div id="uploadbar" className="movieCard input-group w-25">
                <h6>محل آپلود فیلم جدید</h6>
                <p>  <input type="text" placeholder='نام'  style={{direction:"rtl"}} onChange={setName}  value={name}></input></p>
                <p>  <input type="text" placeholder='پوستر'  style={{direction:"rtl"}} onChange={setPoster} value={poster}></input></p>
                <p>  <input type="text" placeholder='توضیحات'  style={{direction:"rtl"}} onChange={setDescriptio} value={description}></input> </p>
                <p>  <input type="text" placeholder='سال ساخت'  style={{direction:"rtl"}}onChange={setCreated} value={created}></input> </p>
                <p> <button type="submit" onClick={NewMovie} className="btn btn-sm btn-success fa fa-plus-square input-group-prepend"></button></p>               
            </div>
        </form>
         <button id="show_btn" onClick={ShowMovies} >نمایش</button>
         {/* <button>رفتن به صفه ی بعد</button> */}
         {Movie}            
        </div>
            );
}
 
export default Loadpage;