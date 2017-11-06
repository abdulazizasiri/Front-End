(() =>{
let imageQuery = function() {
    $('#images').html('');
    let tag = $(".text").val(); 
    if(tag.length == 0){
        $('.note').html('no queries provided');
        return false;
    }   
    var url =  'https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=32245e8620956fe3883c717a3f99276d&tags='+tag+'&jsoncallback=?';
    var src;

    $.getJSON(url, function(data){

        $.each(data.photos.photo, function(i,item){
            item.server
            console.log("item SERVVER: "+ item.server);
            console.log("item Farm: "+ item.farm);
            console.log("item Farm: "+ item.farm);
            console.log("item ID: "+item.id);
            console.log("item ID: "+item.id);
            console.log("item secret: "+item.secret);
            src = "https://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
            $('<img/>').attr("src", src).appendTo("#images");
            if ( i == 500 ) return false;
        });
        // $('#img01').click(changeBehavior);
    });
    
    }
    function changeBehavior(){
        var modal = document.getElementById('myModal');
        var img = document.getElementById('myImg');
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() { 
          modal.style.display = "none";
        }
    }
    
    $('.b').click(imageQuery);

})();