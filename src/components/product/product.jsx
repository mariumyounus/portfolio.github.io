import "./product.css"

const product = ({img,link,video}) => {
  return (
    <div className="p">

      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href ={link} ><img className="p-img" src={img} alt=""></img></a>
       </div>
  )
}

export default product


