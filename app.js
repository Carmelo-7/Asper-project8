let HTML=document.querySelector('html');

let colors = document.querySelectorAll('.color');

let hero = document.querySelector ('#hero');

let buttons = document.querySelectorAll('.btn');

let getStartedHeading = document.querySelector('#get-started-text').querySelector('h5');

//Default
colors[0].addEventListener('click',()=>{
    hero.style.backgroundColor="#6900c7";
    getStartedHeading.style.color="#6900c7";
    HTML.style.scrollbarColor='#6900c7 #fff';


    buttons.forEach((button)=>{
        if(button.innerText!=='Contact Us')
           button.style.backgroundColor = "#6900c7";

    });

});


//Flat
colors[1].addEventListener('click',()=>{
    hero.style.backgroundColor="#8039da";
    getStartedHeading.style.color="#8039da";
    HTML.style.scrollbarColor='#8039da #fff';


     buttons.forEach((button)=>{
         if(button.innerText!=='Contact Us')
           button.style.backgroundColor = "#8039da";

    });
    
});


//Sunset
colors[2].addEventListener('click',()=>{
   hero.style.backgroundColor="#ff793f";
   getStartedHeading.style.color="#ff793f";
   HTML.style.scrollbarColor='#ff793f #fff';

   buttons.forEach((button)=>{
       if(button.innerText!=='Contact Us')
          button.style.backgroundColor = "#ff793f";

});
   
});


//Subtle
colors[3].addEventListener('click',()=>{
    hero.style.backgroundColor="#506c6a";
    getStartedHeading.style.color="#506c6a";
    HTML.style.scrollbarColor='#506c6a #fff';

    buttons.forEach((button)=>{
        if(button.innerText!=='Contact Us')
          button.style.backgroundColor = "#506c6a";

    });
    
 });


 //Seafoam
colors[4].addEventListener('click',()=>{ 
    hero.style.backgroundColor="#0fa28b";
    getStartedHeading.style.color="#0fa28b";
    HTML.style.scrollbarColor='#0fa28b #fff';

    buttons.forEach((button)=>{
        if(button.innerText!=='Contact Us')
          button.style.backgroundColor = "#056743";

    });
    
 });

 let gearIcon = document.querySelector('.theme-changer');

 let sidebar = document.querySelector('aside');



 let displaySidebar = ()=>{
      gearIcon.classList.toggle('theme-changer-fired');
      sidebar.classList.toggle('sidebar-requested');

      
 }

 gearIcon.addEventListener('click',displaySidebar);
