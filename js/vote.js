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
            
            catCounter.innerHTML = catCount;
            $('#voteGatito').prop("disabled", false);
            $('#votePerrito').prop("disabled", false);
           
            
        })
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        
        .then((result) => {
            
        $('.bark').replaceWith( $("<img>", {"src": result.message,"class":"bark","width":"500", "height":"400"}))
        dogCounter.innerHTML = dogCount;
       

        })

});



$('#votePerrito').on('click', function() {
    
    fetch('https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg&format=json&has_breeds=1&order=RANDOM&page=0&limit=1')
    .then((response) => response.json())
    
    .then((result) => {
      
        $('.meow').replaceWith( $("<img>", {"src": result[0].url,"class":"meow","width":"500", "height":"400"})) 
        catCounter.innerHTML = catCount;
    })
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    
    .then((result) => {
        
    $('.bark').replaceWith( $("<img>", {"src": result.message,"class":"bark","width":"500", "height":"400"}))
    dogCounter.innerHTML = dogCount;
    $('#votePerrito').prop("disabled", false);
    $('#voteGatito').prop("disabled", false);
    })

    
    
    });



    let catCounter = document.getElementById('voteGatito');
    catCounter.style.backgroundColor="#f44336";
    let catCount = 0;
    catCounter.addEventListener('click', function(){
   
        catCount++;
    
    
    $('#voteGatito').html("Generating Gato ...");
    $('#voteGatito').prop("disabled", true);
    $('#votePerrito').html("Generating Perro ...");
    $('#votePerrito').prop("disabled", true);
});

let dogCounter = document.getElementById('votePerrito');
    dogCounter.style.backgroundColor="#f44336";
    let dogCount = 0;
    dogCounter.addEventListener('click', function(){
   
        dogCount++;

    $('#votePerrito').html("Generating Perro ...");
    $('#votePerrito').prop("disabled", true);
    $('#voteGatito').html("Generating Gato ...");
    $('#voteGatito').prop("disabled", true);
    
    
    
});










})()