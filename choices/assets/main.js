// var troll = prompt("Voulez-vous le COMBATTRE, le PAYER, ou COURIR ?").toUpperCase();

switch(troll) {
  case 'COMBATTRE':
    var fort = prompt("Quel courage ! Etes-vous fort (OUI ou NON) ?").toUpperCase();
    var malin = prompt("Etes-vous MALIN ?").toUpperCase();
    if(fort === 'OUI' || malin === 'OUI') {
      console.log("Vous n'avez besoin que d'une des deux caractéristiques ! Vous avez battu le troll; bravo !");
    } else {
      console.log("Vous n'êtes ni fort ni malin ? Eh bien, si vous étiez malin, vous n'auriez probablement pas essayé de combattre un troll. Vous perdez !");
    }
    break;
  case 'PAYER':
    var argent = prompt("D'accord, nous allons payer le troll. Avez-vous de l'argent ? (OUI ou NON) ?").toUpperCase();
    var trollMonnaie = prompt("Est-ce que votre argent est en monnaie de Troll ?").toUpperCase();
    if(trollMonnaie === 'OUI' && argent === 'OUI') {
      console.log("Bien ! Vous payez le troll et continuez votre chemin.");
    } else {
      console.log("Bing ! Le troll ne prend que de l'argent de troll. Vous êtes écrabouillé !");
    }
    break;
  case 'COURIR':
    var rapide = prompt("Fuyons ! Etes-vous rapide (OUI ou NON) ?").toUpperCase();
    var avance = prompt("Etes-vous parti avant lui ?").toUpperCase();
    if(rapide === 'OUI' || avance === 'OUI') {
      console.log("Vous vous échappez de justesse ! Vous vivrez pour retourner vous promener dans la forêt.");
    } else {
      console.log("Vous êtes lent et n'êtes pas parti en avance ? Vous n'aviez aucune chance ! Le troll vous dévore.");
    }
    break;
  default:
    console.log("Je n'ai pas compris votre choix. Cliquez sur Relancer et réessayez mais cette fois choisissez COMBATTRE, PAYER ou COURIR !");
}
