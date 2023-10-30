const divtoShow='nav .menu';
const divPopup= document.querySelector(divtoShow);
const divTrigger= document.querySelector('.m-trigger');

divTrigger .addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')){
            divPopup.classList.add('show');
            document.body.classList.add('menu-visible')
        }
        
    }, 250);
})

//automatically close by click outside menu

document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);

    if(!isClosest && divPopup.classList.contains('show')){
        divPopup.classList.remove('show');
        document.body.classList.remove('menu-visible')
    }
})

//............SEARCH

const sTrigger= document.querySelector('.s-trigger');
const addclass= document.querySelector('.site');
sTrigger.addEventListener('click', () => {
    addclass.classList.toggle('showsearch')
})

//............Slider

const sliderThumb = new Swiper('.thumb-nav', {
    spaceBetween: 10,
    slidesPerView: 3,
    slidesPerGroup: false,
    breakpoints: {
        992: {
            direction: 'vertical'
        }
    }
});
const theSlider = new Swiper('.thumb-big', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
      },
      thumbs: {
        swiper: sliderThumb
      }
    
});

//.........Tabbed products

const tabbednav = new Swiper('.tnav', {
    spaceBetween: 20,
    slidesPerView: 6,
    centeredSlides: true,
    slidesPerGroup: false,
   
});
const theTab = new Swiper('.tabbed-item', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbednav,
    }   
});

const categoryLinks = document.querySelectorAll('.categories .cat-item a.link');
categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        const targetCategoryId = link.getAttribute('href'); // Get the category ID from the link's href attribute
        const targetCategoryElement = document.querySelector(targetCategoryId);

        if (targetCategoryElement) {
            // Use JavaScript to scroll to the target category
            targetCategoryElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ......... ON SCROLL TRANSITION

// const io = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.intersectionRatio > 0){
//             entry.target.classList.add('this')
//         }
//     })
// });


// const box= document.querySelectorAll('.animate');
//     box.forEach((el) => {
//         io.observe(el);
//     });

