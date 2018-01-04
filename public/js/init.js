(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $("form").on("submit",function(event){
          event.preventDefault();
          var formData = $(this).serialize();
          $("tbody").empty()
          $.post("/search",formData,handleResponse)
      });

    $('.search-again').on("click", function(){
      window.scrollTo(0,0);
      $('.results').addClass('hide')
      $("tbody").empty()
    })

    $('.download-csv').on("click", function(event){
      event.preventDefault();
      window.open('data:application/vnd.ms-excel,' + $('#table-container').html());
    })

    $('#contact-submit').on('click', function(event) {
      event.preventDefault();
      alert("Sorry I don't work. I'm just here to look good")
    })

  }); // end of document ready
})(jQuery); // end of jQuery name space

var handleResponse = function (data, status) {
  if (data) {
    for (var i = 0; i < data.length; i++) {
      $("tbody").append(`<tr>
                <td>${data[i].firstname} ${data[i].firstsurname}</td>
                <td>${data[i].secondname} ${data[i].secondsurname}</td>
                <td>${data[i].location}</td>
                <td>${data[i].day}/${data[i].month}/${data[i].year}</td>
                <td>${data[i].ref1}/${data[i].ref2}/${data[i].ref3}</td>
              </tr>`)
    }
    if (data.length == 100) {
      $("tbody").append(`<tr>
                <td colspan="5">Please note: We had to limit the results to a 100 max</td>
              </tr>`)
    }
  } else {
    $("tbody").append(`<tr>
              <td colspan="5">Sorry. We could not find any records please try again</td>
            </tr>`)
  }
  $('.results').removeClass('hide')
}
