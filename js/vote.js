;(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.thecatapi.com/v1/breeds?attach_breed=0",
        "method": "GET",
        "headers": {
          "x-api-key": "c82b3c49-a7aa-4b99-85b7-77b7e408c611"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });


      $(function() {

        fetch('https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=1&order=RANDOM&page=0&limit=1')
        .then((response) => response.json())
        
        .then((result) => {
          
        $("<img>",{"src": result[0].url,"class":"meow","width":"500", "height":"400"}).appendTo($('#litterBox'))
        

        })
   });

   $(function() {

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    
    .then((result) => {
      
    $("<img>",{"src": result.message,"class":"bark","width":"500", "height":"400"}).appendTo($('#junkYard'))
    

    })
});

$('#voteGatito').on('click', function() {

fetch('https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=1&order=RANDOM&page=0&limit=1')
        .then((response) => response.json())
        
        .then((result) => {
          
            $('.meow').replaceWith( $("<img>", {"src": result[0].url,"class":"meow","width":"500", "height":"400"})) 

        })
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        
        .then((result) => {
            
        $('.bark').replaceWith( $("<img>", {"src": result.message,"class":"bark","width":"500", "height":"400"}))

        })

});



$('#votePerrito').on('click', function() {
    
    fetch('https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=1&order=RANDOM&page=0&limit=1')
    .then((response) => response.json())
    
    .then((result) => {
      
        $('.meow').replaceWith( $("<img>", {"src": result[0].url,"class":"meow","width":"500", "height":"400"})) 

    })
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    
    .then((result) => {
        
    $('.bark').replaceWith( $("<img>", {"src": result.message,"class":"bark","width":"500", "height":"400"}))

    })

    
    
    });



    let catCounter = document.getElementById('voteGatito');
    catCounter.style.backgroundColor="#f44336";
    let catCount = 0;
    catCounter.addEventListener('click', function(){
   
        catCount++;
    
    catCounter.innerHTML = catCount;
    
});

let dogCounter = document.getElementById('votePerrito');
    dogCounter.style.backgroundColor="#f44336";
    let dogCount = 0;
    dogCounter.addEventListener('click', function(){
   
        dogCount++;
    
    dogCounter.innerHTML = dogCount;
    
});










})()