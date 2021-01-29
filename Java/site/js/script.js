//виповняється тоді коли html є , сама структура
window.addEventListener('DOMContentLoaded', function(){
  
    let tab = document.getElementsByClassName('info-header-tab'),
        tabContent = document.getElementsByClassName('info-tabcontent'),
        info = document.getElementsByClassName('info-header')[0];

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++ ) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1)
    
    function showTabContent(b) {
        if( tabContent[b].classList.contains('hide')){
            hideTabContent(0);
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

        }
    }
    
    info.addEventListener('click', function(event){
       let target = event.target;
       if(target.className == 'info-header-tab') {
           for( let i = 0; i < tab.length; i++){
               if (target == tab[i]){
                   showTabContent(i);
                   break;
               }
           }
       };
    });

    //Timer
    let deadline = '2021-01-30';
    
    function toZero(time) {
        if (time < 0 ) {
            return "00"
        } if (time < 10) {
            return "0" + time;
        } 
         return time
    }

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor ( (t/1000) % 60 ) ,
        minutes = Math.floor ((t/1000/60) % 60),
        hours = Math.floor ((t/(1000*60*60)));
       
       
     
       seconds = toZero(seconds);
       minutes = toZero(minutes);
       hours = toZero(hours);
      
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
       
    };

    function setClock(id, endtime) {
       
         let timer = document.getElementById(id),
             hours = timer.querySelector('.hours'),
             minutes = timer.querySelector('.minutes'),
             seconds = timer.querySelector('.seconds');

            function updateClock() {
                let t = getTimeRemaining(endtime);
                hours.innerHTML = t.hours;
                minutes.innerHTML = t.minutes;
                seconds.innerHTML = t.seconds;

                if (t.total <= 0) {
                  clearInterval(timeInterval);
                }
            };

            updateClock();
             
            let timeInterval = setInterval(updateClock, 1000);

            
    };

    setClock('timer', deadline);


///плавная прокрутка

    const anchors = document.querySelectorAll('a.scroll-to')

     for (let anchor of anchors) {
       anchor.addEventListener('click', function (e) {
         e.preventDefault()
         
         const blockID = anchor.getAttribute('href')
         
         document.querySelector(blockID).scrollIntoView({
           behavior: 'smooth',
           block: 'start'
         })
       })
     }


    //Modal timer

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        description_1 = document.getElementsByClassName('description-btn')[0],
        description_2 = document.getElementsByClassName('description-btn')[1];
        description_3 = document.getElementsByClassName('description-btn')[2];
        description_4 = document.getElementsByClassName('description-btn')[3];

    more.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';

    });

    description_1.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';

    });

    description_2.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';

    });

    description_3.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';

    });

    description_4.addEventListener('click', function() {
        this.classList.add('more-splash');
        overlay.style.display = "block";
        document.body.style.overflow = 'hidden';

    });

    close.addEventListener('click', function() {
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


    //animation 
    let splash = document.querySelector(".splash");

    function myAnimation() {
        let elem = document.querySelector(".more"),
            pos = 0,
            id = setInterval(frame, 10);
    
            function frame() {
                if (pos == 300) {
                    clearInterval(id);
                } else {
                    pos++;
                    elem.style.top = pos + 'px';
                    elem.style.left = pos + 'px';
                }
            }
    }
    
    splash.addEventListener('click', myAnimation);



    

});