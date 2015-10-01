function getQuotes() {
    var quotes = [
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-FightClub-golem13.jpg",
            text : "C'est quand on a tout perdu qu'on est libre de faire ce que l'on veut."
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-IntoTheWild-golem13.jpg",
            text : "Le bonheur n'est r&eacute;el que lorsqu'il est partag&eacute;." 
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-leParrain2-golem13.jpg",
            text : "Gardez vos amis pr&egrave;s de vous, mais gardez vos ennemis encore plus pr&egrave;s"
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-LordOfWar-golem3-2.jpg",
            text :"Rien ne co&ucirc;te plus cher &agrave; un marchand d'arme que la paix."
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-PamelaRose-golem13.jpg",
            text : "Il a &eacute;t&eacute; &eacute;lectrocut&eacute; pour avoir mang&eacute; des abats."
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-PortesDisparus3-golem13.jpg",
            text : "Je mets les pieds o&ugrave; je veux et c'est souvent dans la gueule."
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-BlairWitch-golem13.jpg",
            text : "J'ai peur d'ouvrir les yeux. J'ai peur de les fermer ..."
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-Brice-golem13.jpg",
            text : 'Tu es comme le "H" de Hawa&iuml;, tu ne sers &agrave; rien !'
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-RRRRrrr-golem13.jpg",
            text : "Elle est morte de vieillesse ... mais jeune."
        },
        {
            picture : "http://golem13.fr/wp-content/uploads/2013/05/citaffiches-Usual-Suspects-golem13.jpg",
            text : "On peut convaincre tout le monde qu'on a chang&eacute; mais jamais soi-m&ecirc;me."
        }
    ];
    
    var whichQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // document.getElementById("phrase").innerHTML = whichText ;
    $('#phrase').html(whichQuote.text);
    $('#picture').attr('src', whichQuote.picture);
};

$(document).ready(function() {
    $(".pull-me").click(function() {
        $(".panel").slideToggle('slow');
    });    
});

// "Exige beaucoup de toi-m&ecirc;me et attends peu des autres. Ainsi beaucoup d'ennuis te seront &eacute;pargn&eacute;s.",
// "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
// "La vie est un myst&egrave;re qu'il faut vivre, et non un probl&egrave;me &agrave r&eacute;soudre.",
// "Pour critiquer les gens il faut les conna&icirc;tre, et pour les conna&icirc;tre, il faut les aimer.",
// "Dans la vengeance et en amour, la femme est plus barbare que l'homme.",
// "L'honn&ecirc;tet&eacute;, la sinc&eacute;rit&eacute;, la simplicit&eacute;, l'humilit&eacute;, la g&eacute;n&eacute;rosit&eacute;, l'absence de vanit&eacute;, la capacit&eacute; &agrave servir les autres - qualit&eacute;s &agrave la port&eacute;e de toutes les &acirc;mes- sont les v&eacute;ritables fondations de notre vie spirituelle.",
// "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'&eacute;quilibre.",
// "On passe une moiti&eacute; de sa vie &agrave attendre ceux qu'on aimera et l'autre moiti&eacute; &agrave quitter ceux qu'on aime.",
// "On ne souffre jamais que du mal que nous font ceux qu'on aime. Le mal qui vient d'un ennemi ne compte pas.",
// "L'homme veut &ecirc;tre le premier amour de la femme, alors que la femme veut &ecirc;tre le dernier amour de l'homme."