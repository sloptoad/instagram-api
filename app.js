$(function(){

    $("#search-form").on("submit",function(e){
      $('#popular').empty();
      e.preventDefault();
      e.stopPropagation();
      query = $('#search').val();
      console.log(query);
    

    var url = "https://api.instagram.com/v1/tags/" + query + "/media/recent?client_id=7e7a57487ca642278dd50158878e7aae&callback=?";

    var appendImage = function(image_url) {
      $("#popular").append("<ul><img src=\"" + image_url + "\">"+"</ul>");
    };


    $.ajax({
      url: url,

      // the name of the callback parameter, as specified by Instagram documentation http://instagram.com/developer/endpoints/
      jsonp: "callbackFunction",

      // tell jQuery we're expecting JSONP
      dataType: "jsonp"
    })
    .success(function( response ) {
      console.log("success", response ); // server response
      var posts = response.data;
      $.each(posts, function(index, post){
         console.log(post);
         appendImage(post.images.low_resolution.url);
      });
    });
});
    });

// .error(function( response) {
//   console.log("error", response);