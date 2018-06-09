let database = [{
   name:"Purple Kow",
   adress:"2164 Center St, Berkeley, CA 94704",
   rating: "4.1" ,
   phone:"(510) 356-4808",
   picture:"purplekow.jpg",
   bio: "Asian-influenced sweets menu featuring flavored teas, jelly drinks & assorted snacks & desserts.",
 },{
   name:"Ucha",
   adress:"2199 Bancroft Way, Berkeley, CA 94720",
   rating:" 4.5",
   phone:"(510) 848-8028)",
   picture:"uchA.jpg",
   bio: "Chill counter in a simple modern storefront for iced & bubble tea drinks with creative snacks.",
 },{
   name:"Boba guys",
   adress:"3491 19th St, San Francisco, CA 94110",
   rating: "4.5",
   phone: " (415) 967-2622",
   picture:"boba guys.png",
   bio: "Heirloom leaves & organic milk are used at this casual cafe pouring boba milk teas, coffee & more.",
  },{
   name:"Share Tea",
  adress: "2440 Bancroft Way, Berkeley, CA 94704",
   rating: "4.2",
   Phone: "(415) 734-0525",
   picture:"share tea.jpeg",
   bio: "This Taiwanese import serves bubble milk teas in a range of flavors, in a bright counter serve shop.",
 },{
   name:"Yokee",
  adress: "1728 Franklin St, Oakland, CA 94612",
   rating: "4.8",
   phone :"(510) 836-3288",
   picture:"yokee.jpg",
   bio: ""
   }

  let searchBar = document.getElementById("search-bar");
  let searchButton = document.getElementById("search-button");
  let autoSuggestions = document.getElementById("auto-suggestions");
  let display = document.getElementById("display");

  searchBar.addEventListener("keypress", checkKey);
  searchButton.addEventListener("click", processInput);
   function checkKey(e) {
     var key =e.whcih || e.keyCode;
     if(key == 130 {

       processInput();

     }
   }

   function processInput() {
     let cleanedRecord Name= searchBar.value.toLowerCase().trim();
     autoSuggestions.innerHTML + '';
     autoSuggestions.style.display = 'none';
     autoSuggestions.innerHTML + '';
     let databaseRecord = getRecord(cleanedInput);

     if (databaseRecord != null) {
       displayRecord(databaseRecord);
     } else {
       alert('No results');
     }
   }

   function getRecord(cleanedInput) {
     console log(" ger record is running");
     for(let i = 0; i < database.length; i++) {
       console.log("ayyyy");
       let cleanedRecordname = database [i].species.toLowerCase().trim();
       console.log(cleanedRecordName);
       if(cleanedInput== cleanedRecordName) {
         return database [i];

       }
     }

     return null;
   }

   function displayRecord(databaseRecord) {
     let recordName = document.createElement("h2");
     recordName.innerHTML = databaseRecord.name;
     let recordAge = document.createdElement("h2");
     recordAge.innerHTML = databaseRecord.age;
     let recordRelation
   }
