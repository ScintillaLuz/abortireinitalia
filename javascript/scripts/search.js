function ajaxRequest() {
	$.ajax({
	  type: "POST",	
	  url: "http://demo.ckan.org/api/3/action/package_show?id=adur_district_spending&callback=?",
	  dataType: "json",
	  success: function(data){
	  	console.log( "success:" + data );
	  },
	  error: function(){
	  	console.log("error!");
	  }
	});
}

$( document ).ready(function() {

	$('#searchbutton').on('click', function(e){
		e.preventDefault();
		ajaxRequest();
	}); 
	
});