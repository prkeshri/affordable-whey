function ResultantServingsAndPriceForRequiredProteins(priceAsGivenInWebsite, servingsAsGivenInWebsite, proteinsPerServingAsGivenInWebsite, requiredProteins = 24){
   const servingsAmount = (servingsAsGivenInWebsite * proteinsPerServingAsGivenInWebsite) / requiredProteins;
   const pricePerServing = priceAsGivenInWebsite / servingsAmount;
   return {
	   resultantServings: servingsAmount, 
	   pricePerServing: pricePerServing
   };
}
