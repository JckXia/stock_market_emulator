$(document).ready(function(){
   console.log("All systems go");
});


(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        console.log("clicked");


   $.ajax({

       headers:{
         Authorization: 'Client-ID 1709dc7e4afd8407b3da5fe456c69af907ed0c0976e5222853a136da02c2dd6e'
       },url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`
   }).done(addImage);

        function addImage(data){
          var htmlCont='';
          console.log(data);
        //  const data=JSON.parse(this.responseText);

         if(data&&data.results&&data.results[0]){
           console.log("exist");
             const first=data.results[0];
             htmlCont=`<figure>
                <img src="${first.urls.regular}" alt="test">
             </figure>`
         }
         else{
           htmlCont= ` ${searchedForText} does not exist here, 404`;
         }
         responseContainer.insertAdjacentHTML('afterbegin',htmlCont);
        }

        $.ajax({
          url:`https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${searchedForText}&apikey=BFK2DZWUB5348EUX`
        }).done(stocks);

        function stocks(data){
          console.log(data);
          console.log(data["Stock Quotes"]["0"]["2. price"]); //This command outputs the price of the stock
        }

    //Open ajax request




    });

})();
