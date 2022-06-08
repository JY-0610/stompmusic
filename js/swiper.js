const swiper = new Swiper(".swiper-container,swiper", {
  direction: 'horizontal',
  loop: true,
  autoplay:true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  
  slidesPerView: 5,
  slidesPerGroup : 1,
  pagination : {
    el : '.swiper-pagination',
    type: "fraction",
    clickable : true,
},
  
  scrollbar: {
    el: ".swiper-pagination",
    type:"progressbar",
    draggable: true,
  },
  observer: true,
	observeParents: true,

  });
  const swiper2 = new Swiper(".swiper-container2,swiper2", {
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    
    slidesPerView: 5,
    slidesPerGroup : 1,
    pagination : {
      el : '.swiper-pagination',
      type: "fraction",
      clickable : true,
  },
    
  
  
    });
  

