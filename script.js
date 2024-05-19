const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// ** PROMISE
// const generateJokes = () => {
//         const setHeader = {
//                 headers: {
//                         Accept: "application/json"
//                 }
//         };

//         fetch('https://icanhazdadjoke.com/', setHeader)
//                 // When a request is made,there are only 2 options-either a response is sent or not. Whatever response we get is in html format and we have to convert in json format.
//                 .then((res) => res.json())
//                 .then((data) => {
//                         jokes.innerHTML = data.joke;
//                 })
//                 .catch((error) => {
//                         console.log(error);
//                 });
//                  //If the response is rejected, then we will catch error
// };

// jokeBtn.addEventListener('click', generateJokes);
// generateJokes();

// ** ASYNC AWAIT

const generateJokes = async() => {
        try {
                const setHeader = {
                        headers: {
                                Accept: "application/json"
                        }
                }

                const res = await fetch('https://icanhazdadjoke.com/', setHeader)

                const data = await res.json();
                jokes.innerHTML = data.joke;
        }

        catch(error)
        {
                console.log(`The error is ${error}`);
        }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();


// ** Normal Traditional Function

// aync function generateJokes () {

// }

