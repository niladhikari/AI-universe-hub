const loadUniverse = async (isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tools`);
  const data = await res.json();
  const hubs = data.data.tools;
  displayHub(hubs, isShowAll);
};

const displayHub = (hubs, isShowAll) => {
  const hubContainer = document.getElementById("hub-container");

  // // display show all button if there are more than 12 phones
  const showAllContainer = document.getElementById("show-all-container");

  if (hubs.length > 6 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  // display only first 12 phones if not show All
  if (!isShowAll) {
    hubs = hubs.slice(0, 6);
  }

  hubs.forEach((hub) => {
    // console.log(hub);
    const hubCard = document.createElement("div");
    hubCard.classList = `card bg-base-100 shadow-xl`;

    // Create an empty string to hold the dynamic features HTML
    let featuresHTML = "";
    // Add each feature to the HTML string
    hub.features.forEach((feature) => {
      featuresHTML += `<li>${feature}</li>`;
    });

    hubCard.innerHTML = `
    <figure class="px-6 pt-6">
    <img src="${hub?.image}" alt="Hubs" class="rounded-xl" />
  </figure>
  <div class="card-body">
  <h2 class='font-bold text-2xl pb-2'>Features</h2>
  
  <ol class='list-decimal'>
  ${featuresHTML} 
  </ol>
  

  <hr>

  <div class="card-actions flex justify-between  text-center items-center">
  <div>
  <h2 class='font-bold text-l py-2'>${hub.name}</h2>

  <div class= 'flex gap-2'> 
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  <p>${hub.published_in}</p>
  </div>
  
  </div>
  <button> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
</div>
</div>
</div>
  `;
    hubContainer.appendChild(hubCard);
  });
};

// show all product Details
const hubConTantClick = async (id) => {
  // console.log(id);
  const res = await fetch(
    `https://openapi.programming-hero.com/api/ai/tool/01`
  );
  const data = await res.json();
  const hub = data.data;
  showPhoneDetails(hub);
};

// using for load the data in modal
const showPhoneDetails = (phone) => {
  console.log(phone);
  const features = Object.values(phone.features)
  // console.log(features[0].feature_name);
  
    // Create an empty string to hold the dynamic features HTML
    let featuresHTML = "";
    // Add each feature to the HTML string
    features.forEach((feature) => {
      featuresHTML += `<li>${feature.feature_name}</li>`;
      
    });


    let integrationsHTML = "";
    // Add each feature to the HTML string
    phone.integrations.forEach((integra) => {
      integrationsHTML += `<li>${integra}</li>`;
      
    });
    // console.log(integrationsHTML);
    

  // console.log(phone.features['1'].feature_name);
  const showDetailContainer = document.getElementById("show-detail-container");

  showDetailContainer.innerHTML = `
  <div class ='bg-[#e6c8c8] p-2'>
  <div class='mb-2'>
      <h1 class='font-semibold'>${phone.description}</h1>
  </div>
  <div class="flex gap-2 text-center">
  <h3 class="bg-white rounded p-1 font-bold text-green-400">$10/ <br>
  month <br>
Basic</h3>
<h3 class="bg-white rounded p-1 font-bold text-orange-300">$50/ <br>
  month <br>
Pro</h3>
<h3 class="bg-white rounded p-1 font-bold text-orange-500">Contact <br>
us <br>
Enterprise</h3>
  </div>
  <div class="flex justify-between gap-3 mt-3">
  <div>
      <h1 class='font-bold pb-2'>Features</h1>
      <ul class = 'list-disc pl-3'>
       ${featuresHTML}
      </ul>
  </div>
  <div>
      <h1 class='font-bold pb-2'>Integrations</h1>
      <ul class = 'list-disc pl-3'>
       ${integrationsHTML}
      </ul>
  </div>
</div>
</div>

  <div class =''>
    <img  class="" src="${phone.image_link[0]}" alt="" />
    <h1 class='font-bold text-center pt-5'>${
    phone.input_output_examples[0].input}</h1>
    <p class='font-medium  text-center pt-3'>${
    phone.input_output_examples[0].output}</p>
  </div>
  `
  // show the modal
  show_details_modal.showModal();
};

// show all button click show the all product
const handleShowAll = () => {
  loadUniverse(true);
};

loadUniverse();
