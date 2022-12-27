function displayImage(data){
    // $('<img>',{
    // src:data.url,
    // height:'100%',
    // width:'100%',
    // }).appendTo('#image-container')
   var img= $(document.createElement('img'));
   img.attr('src',data.url);
   img.appendTo('#image-container');
}


$.ajax({
    url:'https://api.nasa.gov/planetary/apod',
    method:'GET',
    Success:displayImage,
    data:{
        api_key:'DEMO_KEY',
        date: "2022-12-27",
    }

});