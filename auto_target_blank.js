window.onload = function(){

  var anchors = document.getElementsByTagName('a');
  for (var i=0; i<anchors.length; i++){

    console.log(window.location.hostname);

  if(anchors[i].href.indexOf(window.location.hostname) >= 0){

   anchors[i].setAttribute('target', '_self');

  }else{

   anchors[i].setAttribute('target', '_blank');

  }
    
  }

}