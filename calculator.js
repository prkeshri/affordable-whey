function ResultantServingsAndPriceForRequiredProteins(priceAsGivenInWebsite, servingsAsGivenInWebsite, proteinsPerServingAsGivenInWebsite, requiredProteins /*= 24*/){
	requiredProteins = requiredProteins || 24;
   var r = servingsAsGivenInWebsite * proteinsPerServingAsGivenInWebsite / requiredProteins;
   var pricePerServing = priceAsGivenInWebsite/r;
   return JSON.stringify({resultantServings:r, pricePerServing: pricePerServing},0 ,4);
}