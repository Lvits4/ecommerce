const onloadEvent = () => {


  const IMG = [
    'images/image-product-1.jpg',
    'images/image-product-2.jpg',
    'images/image-product-3.jpg',
    'images/image-product-4.jpg'

  ]

  const menu375 = document.getElementsByClassName('icon-menu')[0]
  const close = document.getElementById('close')
  const seccion = document.getElementsByTagName('aside')[0] 
  const car = document.getElementsByClassName('car')[0] 
  const cartSection = document.getElementsByClassName('cart-section')[0] 
  const modal = document.getElementsByClassName('modal')[0]
  const button = document.getElementsByClassName('add-to-car')[0]
  const compra = document.getElementsByClassName('compra-section')[0]
  const vacio = document.getElementsByClassName('empty')[0]
  const borrar = document.getElementsByClassName('delete')[0]
  const mas = document.getElementsByClassName('mas')[0]
  const menos = document.getElementsByClassName('menos')[0]
  const cant = document.getElementsByClassName('number')[0]
  const number = document.getElementsByClassName('numero')[0]
  const imagen = document.getElementsByClassName('img-principal')[0]
  let valorActual = 0

  //Carousel Grande Selection 
  const next = document.getElementsByClassName('next')[0]
  const prev = document.getElementsByClassName('prev')[0]
  const imgDiv = document.getElementsByClassName('carousel')[0]
  const closeCarousel = document.getElementsByClassName('close-carousel')[0]
  let posicionActual = 0

  //Carousel Mobil Selection 
  const nextM = document.getElementsByClassName('next')[1]
  const prevM = document.getElementsByClassName('prev')[1]
  const imgDivM = document.getElementsByClassName('movil-carousel')[0]
  let posicionActualM = 0



  //Menu Mobil
  const openMenu = ()=>{
    seccion.style.left = '0'
    modal.style.display = 'block'
  }

  const closeMenu = ()=>{
    seccion.style.left = '-500px'
    modal.style.display = 'none'
  }

  menu375.addEventListener('click', openMenu)

  close.addEventListener('click', closeMenu)


  //Cart Section
  car.addEventListener('click', ()=>{
    const currentTop = cartSection.style.top;
    const targetTop = currentTop === '4rem' ? '-500rem' : '4rem'
    
    cartSection.style.top = `${targetTop}`
  })

  borrar.addEventListener('click', ()=>{
    compra.style.display = 'none'
    vacio.style.display = 'block'
  })

  const cantidad = (valor)=>{
    valorActual+= valor
    valorActual = Math.max(valorActual, 0)
    cant.textContent = valorActual

    button.addEventListener('click', ()=>{
      compra.style.display = 'flex'
      vacio.style.display = 'none'
      if(valorActual!==0){
        number.textContent = valorActual
      }
    })      
  }

  mas.addEventListener('click', ()=>{
    cantidad(1)
  })

  menos.addEventListener('click', ()=>{
    cantidad(-1)
  })


  //Carousel Grande
  const pasarFoto = ()=>{
    if(posicionActual >= IMG.length - 1) {
        posicionActual = 0
    } else {
        posicionActual++
    }
    renderizarImagen()
}

  const retrocederFoto = ()=> {
      if(posicionActual <= 0) {
          posicionActual = IMG.length - 1
      } else {
          posicionActual--
      }
      renderizarImagen()
  }

  const renderizarImagen = ()=> {
    imgDiv.style.backgroundImage = `url(${IMG[posicionActual]})`
  }

  const carouselGrande = ()=>{
    modal.style.display = 'flex'
  }

  const closecarousel= ()=>{
    modal.style.display = 'none'
  }
  
  next.addEventListener('click', pasarFoto)
  prev.addEventListener('click', retrocederFoto)
  renderizarImagen()

  imagen.addEventListener('click', carouselGrande)
  closeCarousel.addEventListener('click', closecarousel)


  //Carousel Mobil
  const pasarFotoM = ()=>{
    if(posicionActualM >= IMG.length - 1) {
        posicionActualM = 0
    } else {
        posicionActualM++
    }
    renderizarImagenM()
  }

  const retrocederFotoM = ()=> {
      if(posicionActualM <= 0) {
          posicionActualM = IMG.length - 1
      } else {
          posicionActualM--
      }
      renderizarImagenM()
  }

  const renderizarImagenM = ()=> {
    imgDivM.style.backgroundImage = `url(${IMG[posicionActualM]})`
  }

  nextM.addEventListener('click', pasarFotoM)
  prevM.addEventListener('click', retrocederFotoM)
  renderizarImagenM()

}

window.onload = onloadEvent
