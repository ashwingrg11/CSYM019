$(document).ready(function() {
  $.ajax({
    url: "counties.json",
    cache: false,
    success: function(data) {
      console.log('inside success', data);
      let txt = "";
      for (let i = 0; i < data.counties.length; i++) {
        txt += "<tr><td>" + data.counties[i].name + "</td></tr>";
      }
      $("#countylist").html(txt);
    },
    error: function(xhr, status, error) {
      $("#updatemessage").html("An error occurred: "+xhr.responseText);
    }
  });
})

