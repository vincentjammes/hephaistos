var combattre = function (){
      $(this).parent().parent().parent().attr('aria-hidden', true);
      var fort = confirm("Quel courage ! Etes-vous fort ?");
      var malin = confirm("Etes-vous malin ?");
      if(fort === true || malin === true) {
        alert("Vous n'avez besoin que d'une des deux caractéristiques ! Vous avez battu le troll; bravo !");
      } else {
        alert("Vous n'êtes ni fort ni malin ? Eh bien, si vous étiez malin, vous n'auriez probablement pas essayé de combattre un troll. Vous perdez !");
      }
};
var soudoyer = function (){
    var argent = confirm("D'accord, nous allons payer le troll. Avez-vous de l'argent ?");
      var trollMonnaie = confirm("Est-ce que votre argent est en monnaie de Troll ?");
      if(trollMonnaie === true && argent === true) {
        alert("Bien ! Vous payez le troll et continuez votre chemin.");
      } else {
        alert("Bing ! Le troll ne prend que de l'argent de troll. Vous êtes écrabouillé !");
      }
};

var courir = function (){
    var rapide = confirm("Fuyons ! Etes-vous rapide ?");
    var avance = confirm("Etes-vous parti avant lui ?");
      if(rapide === true || avance === true) {
        alert("Vous vous échappez de justesse ! Vous vivrez pour retourner vous promener dans la forêt.");
      } else {
        alert("Vous êtes lent et n'êtes pas parti en avance ? Vous n'aviez aucune chance ! Le troll vous dévore.");
      }
};

$(document).ready(function () {
  $('[data-modal').click(function (event) {
    var targetName = '#' + $(this).attr('data-modal');
    $(targetName).attr('aria-hidden', false);
  })

  $('[data-close-modal]').click(function (event) {
    $(this).parent().parent().parent().attr('aria-hidden', true);
  })
});