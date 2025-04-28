import './Hero.css';
import heroimg from "../../assets/heroImage.png"

export const Hero = () => {
  return (
   <section className='container'>
    <div className='content'>
        <div className='content-inside'>
        <h1 className='title1'>Hi I am Rusindu</h1>
        <p className='description'>This is my portfolio Contact me if anyone interest</p>
        <a href='mailto:rusindunm@gmail.com' className='contactbtn'>Contact me</a>
        </div>
        <img src={heroimg} className='heroImg'></img>
        
    </div>
    <div className='topblur'/>
    <div className='bottomblur'/>
   </section>
  )
}
