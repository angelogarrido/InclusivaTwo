document.addEventListener("DOMContentLoaded", function () {
    // Slider
    const slider = document.querySelector(".slider");
    const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    let currentImageIndex = 0;
  
    function changeImage() {
      slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  
    // Cambia la imagen cada 5 segundos (5000 milisegundos)
    setInterval(changeImage, 5000);
  
    // Mostrar leyendas al pasar el ratón sobre los botones
    const btnAbout = document.getElementById("btnAbout");
    const btnContact = document.getElementById("btnContact");
    const btnHowItWorks = document.getElementById("btnHowItWorks");
  
    function showCaption(event, caption) {
      const captionElement = document.createElement("div");
      captionElement.classList.add("caption");
      captionElement.textContent = caption;
      document.body.appendChild(captionElement);
  
      const rect = event.target.getBoundingClientRect();
      captionElement.style.top = rect.top + "px";
      captionElement.style.left = rect.left + "px";
  
      setTimeout(() => {
        captionElement.remove();
      }, 3000);
    }
  
    btnAbout.addEventListener("mouseover", (event) => {
      showCaption(event, "Descubre quiénes somos");
    });
  
    btnContact.addEventListener("mouseover", (event) => {
      showCaption(event, "Contáctanos para más información");
    });
  
    btnHowItWorks.addEventListener("mouseover", (event) => {
      showCaption(event, "Aprende cómo funciona nuestro servicio");
    });
  });
  