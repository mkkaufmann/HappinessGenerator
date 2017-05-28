$(function () {
    function createSelector(badwords, i) {
        //        var selector = ":contains('" + badwords[i][0] + "'):not(:has('body'),:has('html'),:has('script'),:has('style'),:has('head'),:has('meta'),:has('noscript')):not('body'):not('html'):not('script'):not('style'):not('head'):not('meta'):not('noscript'),:contains('" + badwords[i][0].toLowerCase() + "'):not(:has('body'),:has('html'),:has('script'),:has('style'),:has('head'),:has('meta'),:has('noscript')):not('body'):not('html'):not('script'):not('style'):not('head'):not('meta'):not('noscript')";
        var selector = "*";
        return selector;
    }
    var hasListener = false;
    var running = false;

    function replaceBadWords() {
        if (running) {
            return;
        } else {
            running = true;
        }
        //var selector = ":contains('" + badwords[i] + "'):not('body'):not('html'):not('script'):not('style'):not('head'):not('meta'):not('noscript'),"+":contains('" + badwords[i].toLowerCase() + "'):not('body'):not('html'):not('script'):not('style'):not('head'):not('meta'):not('noscript')";
        var badwords = [['stupid', "great"],
                         ["dumb", "a very successful person"],
                         ["idiot", "awesome individual"],
                         ["fool", "pretty dank person"],
                         ["moron", 'fantastic friend'], ['poopoo head', 'smart person'], ["dummy", "smarty"],
                         ["die", "live a happy life"],
                         ["news", "fake"],
                         ["fat", "beautiful"],
                         ["crap", "roses"],
                         ["suck", "rad"],
                         ["damn it", "supercalifragilisticexpialidochious"],
                         ["jerk", "curtsy like the princess you are"],
                         ["bitch", "got mojo in the dojo"],
                         ["asswipe", "happy camper"],
                         ["cunt", "can sing like Beyonce"],
                         ["dumbfuck", "whole bag of fun"],
                         ["damn", "smexy burrito"],
                         ["douchebag", "my hero"],
                         ["faggot", "smile you could be the next puppymonkeybaby!"],
                         ["dickhead", "rainbow-suited astronaut"],
                         ["dipshit", "real great mate"],
                         ["dumbass", "smokier than grandpa's grill"],
                         ["fucker", "next ruling meme lord"],
                         ["nigger", "finer than kentucky fried chicken"],
                         ["pussy", "more fire than taco bell"],
                         ["shithead", "funny bunny"],
                         ["motherfucker", "cute as groot"],
                         ["shitty", "reminds me of a fresh-baked pie"],
                         ["fuck", "fabulous flamingo"],
                         ["shithole", "magic like mike"],
                         ["shitface", "bad like bacon"],
                         ["shit", "poop"],
                         ["ass", "bubble-blowing fairy princess"],
                         ["dick", "cute cookie"],
                         ["cock", "disco-dancing dragon"]];
        for (var i = 0; i < badwords.length; i++) {
            $(createSelector(badwords, i)).each(function () {
                var badword = badwords[i][0];
                for (var j = 0; j < this.childNodes.length; j++) {
                    var node = this.childNodes[j];

                    if (node.nodeType === 3) {
                        var text = node.nodeValue;
                        var text1 = text;
                        var re1 = new RegExp(badword, "gi");
                        //                        var re2 = new RegExp(badword.toLowerCase(), "gi");
                        //                        var re3 = new RegExp(badword.toUpperCase(), "gi");
                        var replacedText = text1.replace(re1, badwords[i][1]);

                        if (replacedText !== text) {
                            this.replaceChild(document.createTextNode(replacedText), node);
                        }
                    }
                }
                //                var text = $(this).html();
                //                var badword = badwords[i];
                //                //                $(this).text = text.replace(badword, "great person");
                //                //                var after = $(this).text();
                //
                //                $(this).html(text);
            });
        }
        if (!hasListener) {
            document.addEventListener('DOMNodeInserted', replaceBadWords);
            hasListener = true;
        }
        running = false;
    }
    setTimeout(replaceBadWords, 5000);
    //setInterval(replaceBadWords, 1000);
    setTimeout(document.addEventListener('DOMNodeInserted', replaceBadWords), 5000);
    //    $(document).on("onchange",function(){
    //        setTimeout(replaceBadWords,2000);
    //    });

    //    function run() {
    //        var elements = document.getElementsByTagName("*");
    //        for (var i = 0; i < elements.length; i++) {
    //            var element = elements[i];
    //
    //        }
    //    }
    //    setInterval(run, 1000);
});
