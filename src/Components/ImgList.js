import React from 'react'
import classes from "./ImgList.module.css"

const ImgList = (props) => {
 
 return (
  <div className={classes.container}>
   {
    props.imgs.map(img => (
   <div className={classes.box}>
    <img src={img.img} alt="img" />
    <h3>{img.name}</h3>
   </div>

    ))
   }
  </div>
 )
}

export default ImgList


// https://images.unsplash.com/photo-1554080353-a576cf803bda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80