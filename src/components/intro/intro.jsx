import "./intro.css";
import Marium from "../../img/Marium.jpg";

const intro = () => {
  return (
    <div className='i'>
    <div className='i-Left'>
    <div className="i-left-wrapper">
        <h2 className="i-intro">Hello, My name is</h2>
        <h1 className="i-name">Syeda Marium Younus</h1>
        <div className="i-title">
            <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UX/UI Designer</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">Content Creator </div>
                <div className="i-title-item">Blogger</div>
            </div>
        </div>
        <div className="i-desc">Results-oriented Front-end Developer dedicated to creating and optimizing
interactive, user-friendly, and feature-rich websites. Leverage analytical skills
and strong attention to detail in order to deliver original and efficient web
solutions, provide technical knowledge and expertise.
</div>
    </div>
   </div>
    <div className='i-right'>
    <div className="i-bg"></div>
        <img src={Marium} alt=""className="i-img"></img>
    </div>
    </div>
  )
}

export default intro
