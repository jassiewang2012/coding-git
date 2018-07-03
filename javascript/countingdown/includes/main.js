 var myVar = null;
$(document).ready(()=>{

    
  setPageTitleHeaderFooter();
  
  countDownBtnAction();
  
  changeTitleHeader();
 
  countDown('August 10 2018 00:30 GMT-05');
 
  
  
      //getVenues('Guangzhou').then(venues => renderVenues(venues));
  // getForecast('Guangzhou').then(forecast =>renderForecast(forecast));
  
  $(':submit').click(()=>{
     $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
    $('.trip-sumary').hide();
    let trip = $('#trip-place').val();
  getVenues(trip).then(venues => renderVenues(venues));
   getForecast(trip).then(forecast =>renderForecast(forecast));
    let date = $('#date').val();
    let hours = $('#time').val();
    let time = date + ' '+hours+' GMT-05';
  
    countDown(time);
  });
  
});



                  
function setPageTitleHeaderFooter(){
    let title="Jassie's Trip to China";
$(document).prop('title', title);
$('.masthead-brand').text(title);
$('#footer-credit').html('Trip Counting down for '+title+', by <a href="https://twitter.com/feet_inc">@webbedfeetpro</a>.');
  
}

function countDownBtnAction(){
   $('#count-down-btn').click(()=>{
        let btnNow=$('#count-down-btn').text();
      if(btnNow ==='Weather'){
    $('#count-down-btn').text('Counting Down') ;  
  }else{
    $('#count-down-btn').text('Weather') ; 
  }
    $('#count-down-content').toggleClass('d-none');
    $('#weather-content').toggleClass('d-none');
   });
}

function changeTitleHeader(){
    $('#trip-place').keyup(()=>{
     let tripPlace = $('#trip-place').val();
    $(document).prop('title','Trip to ' + tripPlace );
$('.masthead-brand').text('Trip to ' + tripPlace );
  });
}


function countDown(time){
  
  $('#counting-down-time').delay(1000).removeClass('d-none');
 let countDownDate = new Date(time).getTime();
  if(myVar===null){
  myVar = setInterval(()=>{
    let now = new Date().getTime();
    let distanace = countDownDate - now;

    if(distanace >=0){
    let days = Math.floor(distanace /(1000 * 60 * 60 * 24));
    let hours = Math.floor(distanace % (1000 * 60 * 60 * 24)/(1000 * 60 * 60));
    let mins = Math.floor(distanace % (1000 * 60 * 60) / (1000 * 60));
    let secs = Math.floor(distanace %(1000 * 60)/ (1000));
       $('#day').text(days);
       $('#hour').text(hours);
       $('#minute').text(mins);
       $('#second').text(secs);
    
    }else{
    $('#counting-down-time').text('We hope you enjoyed your trip.');
      }
},1000);
  }else{
    clearInterval(myVar);
    myVar = null;
    countDown(time);
    $('#counting-down-time').html(`<div class="row">
              <div class="col-sm-2">
              </div>
         
            <div class="countdown col-sm-1" data-short="Day" data-full="Day(s)">
              <p id="day">
              </p>
              <p class="label">
                Days(s)
              </p>
            </div>
              
            <div class="sep col-sm-1">
              <p>
                :
              </p>
            </div>
            <div class="countdown col-sm-1" data-short=" Hours" data-full=" Hours(s)">
              <p id="hour">
              </p>
              <p class="label">
                Hours(s)
              </p>
            </div>
            <div class="sep col-sm-1">
              <p>
                :
              </p>
            </div>
            <div class="countdown col-sm-1" data-short="Minute" data-full="Minute(s)">
              <p id="minute">
              </p>
              <p class="label">
                Minute(s)
              </p>
            </div>
            <div class="sep col-sm-1">
              <p>
                :
              </p>
            </div>
            <div class="countdown col-sm-1" data-short="Second" data-full=" Second(s)">
              <p id="second">
              </p>
              <p class="label">
               Second(s)
              </p>
            </div>
              <div class="col-sm-2">
                
              </div>
            </div>`);
  }
}
