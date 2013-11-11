$(":button").click(function() {
	var isbn = this.id;
	var btnDisable = "#"+isbn;
	
	alert('About to report lost on ISBN ' + isbn);
	$.ajax({
		  url: 'http://localhost:8001/library/v1/books/'+isbn+'?status=lost',
		  method: 'PUT',
		  success: function() {
			  $(btnDisable).attr("disabled","disabled");
			  location.reload();
		  },
		  error: function() {
		    alert("Can't Update")
		  }
		})
	
});


$(document).ready(function(){
	var row = document.getElementById("bookTable").rows.length;
	for(i=0;i<row;i++)
	{
		var status=document.getElementById("bookTable").rows[i].cells[4].innerHTML;
		if(status=="lost")
		{
			document.getElementById().disabled=true;
		}
	}
});