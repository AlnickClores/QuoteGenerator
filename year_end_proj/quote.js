const quotes = [
    '"It is during our darkest moments that we must focus to see the light." \n-Aristotle',
    '"In the end, it\'s not the years in your life that count. It\'s the life in your years." \n-Abraham Lincoln',
    '"The only impossible journey is the one you never begin." \n-Tony Robbins',
    '"In three words I can sum up everything I\'ve learned about life: it goes on." \n-Robert Frost',
    '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking." \n-Steve Jobs',
    '"If you genuinely want something, don\'t wait for it — teach yourself to be impatient." \n-Gurbaksh Chahal',
    '"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end." \n-Aristotle',
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." \n-Nelson Mandela',
    '"Life is either a daring adventure or nothing at all." \n-Helen Keller',
    '"Life is a succession of lessons which must be lived to be understood." \n-Ralph Waldo Emerson',
    '"Your worth consists in what you are and not in what you have. \n-Thomas Edison"',
    "'Be yourself; everyone else is already taken.' \n-Oscar Wilde",
    '"Great minds discuss ideas; average minds discuss events; small minds discuss people.” \n-Eleanor Roosevelt',
    '"You only live once, but if you do it right, once is enough." \n-Mae West',
    '"A person who never made a mistake never tried anything new." \n-Albert Einstein',
    "'Courage is what it takes to stand up and speak. Courage is also what it takes to sit down and listen.' \n-Winston Churchill",
    '"Courage doesn\'t always roar. Sometimes courage is the little voice at the end of the day that says, I\'ll try again tomorrow." \n-Mary Anne Radmaher',
    '"It takes courage to grow up and turn out to be who you really are." \n-E.E. Cummings',
    '"Do what you can, with what you have, where you are." \n-Theodore Roosevelt',
    '"Do not let what you cannot do interfere with what you can do." \n-John Wooden'
];

let arrayLength = quotes.length;

function getQuote(){
    let randomQuote = Math.floor(Math.random() * arrayLength);

    document.getElementById('quote').innerHTML = quotes[randomQuote];
}

var toggle = document.getElementById('toggle');

toggle.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        toggle.src = "lightbulb_light.png"
    }else{
        toggle.src = "lightbulb_dark.png"
    }
}