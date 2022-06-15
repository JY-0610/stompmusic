const concertInfo = new Swiper(".swiper-container, .swiper", {
  direction: 'horizontal',
  
  effect:'fade',
  loop: true,
  autoplay:true,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  
  slidesPerView: 3,
  spaceBetween:100,
  pagination : {
    el : '.swiper-slide',
    clickable : true,
},
  
  scrollbar: {
    el: ".swiper-pagination",
    draggable: true,
    type:"progressbar",
    draggable: true,
  },
  observer: true,
	observeParents: true,

  });
  const album = new Swiper(".swiper-container2,swiper2", {
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
  

