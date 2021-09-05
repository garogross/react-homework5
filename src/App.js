import './App.css';
import Form from "./Components/Form"
import ImgList from "./Components/ImgList"
import { useState } from 'react';


function App() {
  const [imgList, setImgList] = useState([])
  
  const addImgHandler = (userImg, userName) => {
    setImgList(prevImgList => {
      return [
        ...prevImgList,
        {
          img: userImg,
          name: userName,
        }
      ]
    })
  }
  return (
    <div className="App">
      <Form onAddImg={addImgHandler}/>
      <ImgList imgs={imgList}/>
    </div>
  );
}

export default App;
