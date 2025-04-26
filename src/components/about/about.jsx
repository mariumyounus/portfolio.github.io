import "./about.css"
import Photo from "../../img/photo.jpeg"

const about = () => {
  return (  
    <div class="about">
  <div class="a-left">
  <div className="a-card bg"></div>
<div className="a-card">
    <img src={Photo} alt="" className="a-img"></img>
</div>
  </div>
  <div className="a-right">
  <h1 className="a-title">About Me</h1>
  <p className="a-sub">I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product..</p>
<p className="a-desc">A skilled artist helping you create really beautiful and meaningful things.
   My works are aesthetically pleasing in every shape and pattern Check out some of my work in the Projects section.
I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
  </div>
    </div>
  )
}

export default about

