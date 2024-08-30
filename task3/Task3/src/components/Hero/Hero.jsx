import './Hero.css'

const Hero = () => {
  let slideIndex = 1;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

  setTimeout(() => {
    showSlides(slideIndex);
  }, 0);

  return (
    <div className='hero'>
      <div className='img'>
        <img className='mySlides animation' src="/src/images/banner-01.jpg" alt="error" />
        <img className='mySlides animation' src="/src/images/banner-02.jpg" alt="error" />
        <img className='mySlides animation' src="/src/images/banner-03.jpg" alt="error" />
      </div>
        <div className='content'> 
        <a className="prev" onClick={()=> plusSlides(-1)}>&#10094;</a>
        <a className="next" onClick={()=> plusSlides(1)}>&#10095;</a>
        <div className='text'>
          <p>Toronto, <span>Canada</span></p>
          <h1>Hurry! Get The best villa for you</h1>
        </div>
        <div className='dots'>
          <span className="dot" onClick={()=>currentSlide(1)}></span> 
          <span className="dot" onClick={()=>currentSlide(2)}></span> 
          <span className="dot" onClick={()=>currentSlide(3)}></span> 
        </div>
        </div>
    </div>
  )
}

export default Hero
