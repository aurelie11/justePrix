//on va faire un juste prix
var prixADevine;
var prixPropose;
prixADevine = Number(prompt("Entrez un prix "));
prixPropose = Number(prompt("devinez le prix"));

while(prixPropose !== prixADevine){
	if(prixPropose > prixADevine){
		console.log("C'est moins");
	}
	else{
		console.log("C'est plus");
	}
	prixPropose=Number(prompt("Essayez un nouveau prix"));
}
console.log("Bravo vous avez trouvé");