
> [!NOTE]
> Got the idea from this Veritasium short: [Link](https://www.youtube.com/shorts/8fNFd2Xswjs)
# What is the Collatz Conjecture?

### Collatz Conjecture

The Collatz conjecture, also known as the 3n + 1 conjecture, is an unsolved mathematical problem proposed by Lothar Collatz in 1937. It concerns a sequence defined as follows:

1. **Start with any positive integer nnn.**
2. **Generate the next term in the sequence from the current term nnn using these rules:**

    - If nnn is even, divide it by 2 ( i.e., n → n/2 ​).
    - If nnn is odd, multiply it by 3 and add 1 ( i.e., n → 3n+1 ).

3. **Repeat the process with the resulting value.**

The conjecture states that, regardless of the initial value of nnn, the sequence will eventually reach the number 1.
### Example

For n=6n = 6n=6:

- 666 is even, so divide by 2 to get 333.
- 333 is odd, so multiply by 3 and add 1 to get 101010.
- 101010 is even, so divide by 2 to get 555.
- 555 is odd, so multiply by 3 and add 1 to get 161616.
- 161616 is even, so divide by 2 to get 888.
- 888 is even, so divide by 2 to get 444.
- 444 is even, so divide by 2 to get 222.
- 222 is even, so divide by 2 to get 111.

Thus, starting from 6, the sequence is: 6, 3, 10, 5, 16, 8, 4, 2, 1.
### Significance

Despite its simple definition, the Collatz conjecture has remained unproven for over 80 years and is considered one of the notable unsolved problems in mathematics. It has been tested for many initial values without finding a counterexample, but a formal proof has yet to be discovered.

# How to implement it with JS

Implementing the Collatz Conjecture with JavaScript is a rather simple process.
We just need a function that takes the starting number as an argument:

We want to create an array to store the number sequence.

```javascript
const sequence = [];
```

Also make sure that the value used as an argument is a number. To do that you should make an input validator, but for the sake of simplicity I'll just convert whatever the input is into a number.

> [!WARNING]
> This can create an infinite loop if the input contains letters. If you want to use a input validator you can check the `validate_number` function in `visualizer_controller.js`

```javascript
let number = Number(value);
```

Now to calculate the sequence you need to create a while loop and follow these conditions:

- If the value is even, divide it by 2
- If the value is odd, multiply it by 3 and add 1

We also have to add the value to the array in each iteration
Once we end up with a value of 1, we can break the loop.

```javascript
while (true) {

	sequence.push(number);

	if (number % 2 == 0) { number = number / 2 }
	else { number = (number * 3) + 1 };

	if (number == 1) {
		sequence.push(number);
		break;
	};

};
```

We can finally return the full sequence

```javascript
return sequence;
```

The final result should look something like this:

```javascript
collatz_conjecture = function(value) {

	const sequence = [];
	let number = Number(value);

	while (true) {

		sequence.push(number);

		if ( number % 2 == 0) { number = number / 2 }
		else { number = (number * 3) + 1 };

		if (number == 1) {
			sequence.push(number);
			break;
		};

	};

	return sequence;

};
```
