import StorefrontIcon from '@mui/icons-material/Storefront';
import { useState } from 'react';
import Button from '@mui/material/Button';


const Todolist = (props) => {
    const [buy,setBuy]  = useState(false)
    console.log(buy);

    const buyItem = () => {
        console.log("object");
        setBuy(true)
    }
  return (
    <>
    <div style={{display:"flex"}}>
    <Button onClick={buyItem}><StorefrontIcon/></Button> 

    <li style={{ textDecoration: buy ? "line-through" : "none"}}>
        {" "}
       {props.item}
      </li>

    </div>
     
    </>
  );
};
export default Todolist;
