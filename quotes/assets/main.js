function getPhrase(){
                var listePhrases = new Array(
                    "Exige beaucoup de toi-m&ecirc;me et attends peu des autres. Ainsi beaucoup d'ennuis te seront &eacute;pargn&eacute;s.",
                    "Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.",
                    "La vie est un myst&egrave;re qu'il faut vivre, et non un probl&egrave;me &agrave r&eacute;soudre.",
                    "Pour critiquer les gens il faut les conna&icirc;tre, et pour les conna&icirc;tre, il faut les aimer.",
                    "Dans la vengeance et en amour, la femme est plus barbare que l'homme.",
                    "L'honn&ecirc;tet&eacute;, la sinc&eacute;rit&eacute;, la simplicit&eacute;, l'humilit&eacute;, la g&eacute;n&eacute;rosit&eacute;, l'absence de vanit&eacute;, la capacit&eacute; &agrave servir les autres - qualit&eacute;s &agrave la port&eacute;e de toutes les &acirc;mes- sont les v&eacute;ritables fondations de notre vie spirituelle.",
                    "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'&eacute;quilibre.",
                    "On passe une moiti&eacute; de sa vie &agrave attendre ceux qu'on aimera et l'autre moiti&eacute; &agrave quitter ceux qu'on aime.",
                    "On ne souffre jamais que du mal que nous font ceux qu'on aime. Le mal qui vient d'un ennemi ne compte pas.",
                    "L'homme veut &ecirc;tre le premier amour de la femme, alors que la femme veut &ecirc;tre le dernier amour de l'homme."
                );
                 
                document.getElementById("phrase").innerHTML = listePhrases[Math.floor(Math.random() * listePhrases.length)];
};