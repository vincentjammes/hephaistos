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