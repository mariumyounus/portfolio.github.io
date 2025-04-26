import "./productlist.css";
import {Products} from "../../data"
import Product from "../product/product"

const productlist = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title"> Create & inspire</h1>
        <p className="pl-desc">
        In building React applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.
        </p>
      </div>
      <div className="pl-list">
      {Products.map((item)=>(
        <Product key={item.id} img={item.img} link={item.link}/>
      ))}
        
       
      </div>
    </div>
  )
}

export default productlist
