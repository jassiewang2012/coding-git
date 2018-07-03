// Foursquare API Info

const url = 'https://api.foursquare.com/v2/venues/explore?near=';
const imageUrl='https://api.foursquare.com/v2/venues/';


const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4"),$("#venue5"),$("#venue6"),$("#venue7"),$("#venue8"),$("#venue9"),$("#venue10")];


 // getVenues().then(venues => renderVenues(venues));


// Add AJAX functions here:
const getVenues = async (trip) => {
const urlToFetch = `${url}${trip}&limit=6&client_id=${clientId}&client_secret=${clientSecret}&v=20180618`;

  try{
  const response = await fetch(urlToFetch);
  if(response.ok){
    const jsonResponse = await response.json();
   
    const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
    return venues;
  }
  
}catch(error){
  console.log(error);
}
};

// Add AJAX functions here:
const getVenuesImage = async (venueId) => {
const urlToFetch = `${imageUrl}${venueId}/photos?group=venue&client_id=${clientId}&client_secret=${clientSecret}&v=20180618`;
 
 try{
  const response = await fetch(urlToFetch);
   if(response.ok){
    const jsonResponse = await response.json();
 	const venuesImage = jsonResponse.response.photos.items[0];

    return venuesImage;
  }
  
}catch(error){
   console.log(error);
 }
};


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    if(index<=3){
// 	const venuesImage = getVenuesImage(venue.id).then((venuesImage) =>{
  
//     let slideContent=createVenueSliderHTML(venue,venuesImage);
//     $('#slide'+index).append(slideContent);
//   });
  }
    const venueIcon = 
    venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
     
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
 
  });

 

}

const createVenueSliderHTML = (venue,venuesImage ) => {
  return ` 
      <img class="d-block w-100" src="${venuesImage.prefix}${venuesImage.width}${venuesImage.suffix}" alt="${venue.name}" id="${venuesImage.id}">
      <div class="carousel-caption d-none d-md-block">
     <h5>${venue.name}</h5>
    </div>
    `;
    
}


const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city}</p>
  <p>${location.country}</p>`;
}