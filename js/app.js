$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadious: 10
    });

    const bars = document.querySelectorAll('.progress_bar');
    bars.forEach(function(bar){
       let percentage = bar.dataset.percent;
       let tooltip = bar.children[0];
       tooltip.innerHTML = percentage + '%';
       bar.style.width = percentage + '%';
       console.log(percentage);
    })


    const counters = document.querySelectorAll('.counter');
    function runCounter(){
        counters.forEach(counter=>{
            counter.innerText = 0;

            let target = +counter.dataset.count

            let countIt = function(){
                let displayedCount = +counter.innerText;
                if(displayedCount<target){
                    counter.innerText= displayedCount+1;
                    setTimeout(countIt,1);

                }else{
                    counter.innerText=target;
                }
            }
            countIt();
         })
    }  

    

    let counterSection = document.querySelector('.counter_section');
    let Options = {
        rootMargin : '0px 0px -300px 0px'
    }

    let done = 0;
    const sectionObserver = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting && done!==1){
            done = 1;
            runCounter();
        }

    },Options)

    sectionObserver.observe(counterSection);



    //image filter-----------------------------

    var $wrapper = $('.portfolio_wrapper');

    //initialize plugins

    $wrapper.isotope({
        filter : '*',
        layoutMode :'masonry',
        animationOptions :{
            duration:750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link=>{

        let selector = link.dataset.filter;
        link.addEventListener('click',function(e){
            e.preventDefault();
            $wrapper.isotope({
                filter : selector,
                layoutMode :'masonry',
                animationOptions :{
                    duration:750,
                    easing: 'linear'
                }
            });

          

            links.forEach(link=>{
                link.classList.remove('active');
            })

            e.target.classList.add('active');
        });
    })


    //magnify 

    $('.magnify').magnificPopup({
        type:'image',
        gallary: {
            enabled: true
        },
        zoom : {
            enabled: true
        }
    });



    //slider

    $('.slider').slick({
        arrows: false,
        autoplay:true
    });

});

