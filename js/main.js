 // global variable for pop-up effects

 var closePopup = document.getElementById("popupclose");
 var overlay = document.getElementById("overlay");
 var popup = document.getElementById("popup");

// jokes array 
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

// function to populate pop-up with jokes

document.getElementById("joke-button").addEventListener("click", function(){
  overlay.style.display = 'block'; // gives 'block' display style to #overlay div
  popup.style.display = 'block'; // gives 'block' display style to #popup div
  document.getElementById("content").innerHTML = Jokes[Math.floor(Math.random() * Jokes.length)].joke; // takes a random joke and displays it inside #content div
  document.getElementById("content").className = 'joke-font'; // adds 'jokefont' class to #content div when clicked
});


// inspirational quotes array

var Quotes = [

{quote: "Try not to become a man of success but a man of value - Albert Einstein"},
{quote: "Doubt whom you will, but never yourself - Christian Nestell Bovee"},
{quote: "Do not wait; the time will never be 'just right.' Start where you stand - Napoleon Hill"},
{quote: "The power of imagination makes us infinite - John Muir"},
{quote: "You miss 100% of the shots you don't take - Wayne Gretzky"},
{quote: "I attribute my success to this: I never gave or took any excuse - Florence Nightingale"},
{quote: "I’ve failed over and over and over again in my life. And that is why I succeed - Michael Jordan"},
{quote: "Life is what happens to you while you’re busy making other plans - John Lennon"},
{quote: "The most common way people give up their power is by thinking they don’t have any - Alice Walker"},
{quote: "Your time is limited, so don’t waste it living someone else’s life – Steve Jobs"},
{quote: "I am not a product of my circumstances. I am a product of my decisions – Stephen Covey"},
{quote: "You can never cross the ocean until you have the courage to lose sight of the shore – Christopher Columbus"},
{quote: "Whether you think you can or you think you can’t, you’re right – Henry Ford"},
{quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing – Aristotle"},
{quote: "Everything you’ve ever wanted is on the other side of fear – George Addair"},
{quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful – Joshua J. Marine"},
{quote: "If you want to lift yourself up, lift up someone else – Booker T. Washington"},
{quote: "Build your own dreams, or someone else will hire you to build theirs. – Farrah Gray"},
{quote: "Remember that not getting what you want is sometimes a wonderful stroke of luck. – Dalai Lama"},
{quote: "If you do what you’ve always done, you’ll get what you’ve always gotten. – Tony Robbins"}

];

// function to populate div with quotes

document.getElementById("quote-button").addEventListener("click", function(){
  overlay.style.display = 'block';
  popup.style.display = 'block';
  document.getElementById("content").innerHTML = Quotes[Math.floor(Math.random() * Quotes.length)].quote;
  document.getElementById("content").className = 'quote-font';
});



var cutePics = [

{image: '<img src="images/cute_pics/cute-pic-1.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-2.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-3.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-4.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-5.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-6.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-7.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-8.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-9.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-10.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-11.png" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-12.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-13.jpeg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-14.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-15.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-16.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-17.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-18.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-19.jpg" class="image">'},
{image: '<img src="images/cute_pics/cute-pic-20.jpg" class="image">'},

];

document.getElementById("picture-button").addEventListener("click", function(){
  overlay.style.display = 'block';
  popup.style.display = 'block';
  document.getElementById("content").innerHTML = cutePics[Math.floor(Math.random() * cutePics.length)].image;
  document.getElementById("content").className = ''; // removes all other added classes
  

});


// Close Popup Event
closePopup.onclick = function() {
  overlay.style.display = 'none'; 
  popup.style.display = 'none';

  };


// page loader code

$(window).load(function() {
  $(".loader").fadeOut(2000);
})




