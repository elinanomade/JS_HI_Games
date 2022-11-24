"use strict";
/*
const res = fetch('https://www.boredapi.com/api/activity');
.then(function(res) {
    console.log(res);
    }).then(function(data) {
    // Here we can do something with the data
    console.log(data);
    });
https://catfact.ninja/docs/api-docs.json
*/

    const options = {
        
        // method: 'GET',
     /*   headers: {
            'X-RapidAPI-Key': '9e5bcc999emsh2baa26638031531p1c2403jsnc60cc0a497e4',
            'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
        }
        */
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


       