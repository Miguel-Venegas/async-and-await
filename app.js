// placing the keyword 'async' before a function expression changes how the function operates. When doing so, the function returns a 'promise' (see example below)

async function greet() {
	return 'Hello there';
} // invoking the function in the console outputs: Promise {<fulfilled>: "Hello there"}


// the example below shows that a rejected promise is returned if it does not meet certain conditions (see example below)

async function add(x, y){
	if (typeof x !== 'number' || typeof y !== 'number') {
		throw 'X and Y must be numbers!';
	}
	return x + y;
} // invoking the function with non-number arguments in the console outputs: Promise {<rejected>: "X and Y must be numbers!"}

// using await inside of async function behaves in such a way that it 'waits' for the async function to be resolved before executing specified code inside of the function, thus, giving the impression that it is synchronous (see example below)

async function getPlanets(){
	const response = await axios.get('https://swapi.co/api/planets/');
	console.log(res.data);
}

// what happens when, if nothing is returned? The above getPlanets function does nothing to show that case. Here is a way to make sense of an error. Just add catch at the end of the invoked async function like so:

getPlanets().catch((err) => {
	console.log(err);
	console.log('in catch!!!')
})

// there is another way to do this. You can add a 'try and catch block' like so:

async function getPlanets(){
	try {
		const response = await axios.get('https://swapi.co/api/planets/');
		console.log(res.data);
	} catch (err) {
		console.log('in catch', err)
	}
}