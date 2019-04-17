/*
https://official-joke-api.appspot.com/random_joke

Calling an API - https://official-joke-api.appspot.com/random_joke
1. Use a get request and get a random joke.
2. Console log the setup and punchline
3. Display the joke on the DOM and punchline on the DOM

Bonus 1
4. Display only the setup and then...
5. Incorporate a button with a `click` listener that 
when triggered will display the punchline.

Bonus 2
6. Incorporate a button that will get a new joke.
*/

const answer_button = document.getElementById("button")
answer_button.addEventListener("click",function(event){
    const answer_p = document.getElementById("answer");
    answer_p.style.visibility = "visible";

})

function makeIntoHtml(setup, punchline){
    let htmlProduct = `<p id="question">${setup}</p>
    <p id="answer">${punchline}</p>
    `
    return htmlProduct;
}


function addToDom(htmlString){
    const addition = document.querySelector("#container");
    addition.innerHTML += htmlString;
    }

fetch(`https://official-joke-api.appspot.com/random_joke`)
        .then(result => result.json())
        .then(joke => {
            console.log(joke.setup)
            console.log(joke.punchline)
            const part1 = (joke.setup);
            const part2 = (joke.punchline);
            const html_string = makeIntoHtml(part1, part2);
            addToDom(html_string);
        })