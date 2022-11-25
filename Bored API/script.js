"use strict";



    const options = {
        

    }; 
    
    
    fetch('https://www.boredapi.com/api/activity', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            
           document.getElementById('quote').innerHTML = response.activity;
            document.getElementById('author').innerHTML = '- ' + response.type;
            
        })
        .catch(err => console.error(err));

        const title = document.querySelector('h1');
        title.style.color = 'white';


       