var Jokes = [

{joke: "I wondered why the baseball was getting bigger. Then it hit me."}, 
{joke: "It's not that the man did not know how to juggle, he just didn't have the balls to do it."},
{joke: "Why did the cookie cry? It was feeling crumby."},
{joke: "I used to be a banker, but I lost interest."},
{joke: "Why was the javascript developer sad? Because he didn't Node how to Express himself."},
{joke: "How did the hipster burn the roof of his mouth? He ate the pizza before it was cool."},
{joke: "Why is it hard to make puns for kleptomaniacs? They are always taking things literally."},
{joke: "Two fish swim down a river, and hit a wall. One says: 'Dam!'"},
{joke: "What's funnier than a monkey dancing with an elephant? Two monkeys dancing with an elephant."},
{joke: "What's red and bad for your teeth? A Brick."},
{joke: "What's orange and sounds like a parrot? A Carrot."},
{joke: "I said to the Gym instructor 'Can you teach me to do the splits?' He said, 'How flexible are you?' I said, 'I can't make Tuesdays'"},
{joke: "The dyslexic devil worshipper sold his soul to Santa"},
{joke: "What is Bruce Lee’s favorite drink? Wataaaaah!"},
{joke: "Why don’t you ever see hippopotamus hiding in trees? Because they’re really good at it."},
{joke: "Why does Snoop Dogg carry an umbrella? Fo’ drizzle."},
{joke: "What did Jay-Z call his girlfriend before they got married? Feyoncé."},
{joke: "Why didn’t the lifeguard save the hippie? Because he was too far out man!"},
{joke: "Pampered cows produce spoiled milk."},
{joke: "I started a band called 999 Megabytes — we haven’t gotten a gig yet."}

];

var getJoke = document.getElementById('jokeList');
getJoke.addEventListener('click', function(ev){
  ev.target.innerHTML = Jokes[Math.floor(Math.random() * Jokes.length)].joke;
});