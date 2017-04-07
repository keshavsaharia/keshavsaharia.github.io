I visit programming classes as part of my work on [Pythonroom](https://pythonroom.com), and sometimes I find myself in the situation where I only have 15 minutes to get kids excited about coding in Python. Printing text is boring, and doing anything more complex than printing requires context to make it interesting. Computing started as a way to deal with big numbers and complex operations that humans have difficulty with, so I start by talking about big numbers.

## Getting started

I'll first show them simple mathematics operations and variables. This seems to come intuitively to most kids who have explored these ideas in a math class, and is primarily a way to get them comfortable with running python through the command line interface. So to get started, I have them open Terminal, type `python`, and hit Enter.

Once Python has launched, they can enter mathematical statements after the `>>>` prompt, press Enter, and see the result of the statement print out below.

![]({{url}}/img/writing/big-numbers/terminal.png)

I show them how they can save their numbers in a variable, by entering something like `a = 1 + 2 * 3 - ...`. Once they've stored a number, they can retrieve it by simply typing `a`, or using it in another expression like `a * a`, or even using it with other variables.

In about 2 - 5 minutes, every student will be familiar with

- opening Python from the command line
- adding (`+`), subtracting (`-`), multiplying (`*`), and dividing (`/`) in Python
- storing values into variables (e.g. `a = 1234`, `b = 567`)

## The challenge

I then give students one minute to write a program that creates the biggest number they possibly can, as measured by number of digits. The only requirements are that the program runs in approximately one second or less (to prevent time-consuming operations or infinite loops printing out endlessly large numbers).

Before I say "go!", I show them a short sample program, so they have a concrete idea of what they're trying to accomplish - *create a bigger number than the one I have*.

```python
big = 99999999999999999999999999
```

I also show them how to measure the number of digits in their number. Assuming they stored the number in a variable called `big`, `str(big)` converts the number into text, and `len( str(big) )` gives the length of that piece of text.

![]({{url}}/img/writing/big-numbers/terminal2.png)

A few students will limit their solution to the naivety of my example, and begin furiously press one numeric key (usually the 9) in a comical display of pushing premature [phalanges](https://en.wikipedia.org/wiki/Phalanx_bone) to their limit. Most will realize that they can use a piano-like motion of their fingers to summon a stream of digits from the keyboard. The enterprising student who knows of of the copy-and-paste keyboard shortcuts will first type the longest number possible, then paste it as many times as possible. The most brilliant of the copy-and-paste practicioners will copy and paste a fragment of a mathematical statement to create an expression that produces a large number.

```python
big = 9999999999 * 9999999999 * 9999999999 * 9999999999 * 9999999999 * 9999999999 * ...
```

Most students will have numbers with hundreds of digits, and a few may have numbers with thousands. Some students already know of the exponent operator `**`, and such


There is an even rarer student, who has the mathematical intuition to apply the exponent operator `**` correctly to this challenge. Even choosing `99999 ** 9999` (99999 to the power of 9999) will produce a number with 50,000 digits, far greater than what can be achieved by all but the fastest copy-and-pasting methods. There is the simple and elegant `print 7 ** 7 ** 7` (7 to the power of 7 to the power of 7, or 7 to the power of 823543) producing a number with 695,976 digits. The calculation of even larger exponents will take anywhere from a few minutes to several days.

After a minute, I write down a leaderboard, share some of the winning answers, and give them an opportunity to try again. The second time they attempt to create a large number, nearly every student will use exponentiation to find the balance between calculation speed and resulting size of the number. A maximum time of 3 seconds should be imposed on calculating numbers, as allowing students to wait longer tends to leave them idle while the computer tries to conceive a number that may take hours to assemble.

## Binary operators

The lesson provides a great segue into binary representation - the way numbers are stored in a computer. I'll show them other operators like `<<`, the [logical shift](https://en.wikipedia.org/wiki/Logical_shift). The kids will pay much closer attention to a bland mathematical topic when it is akin to an arms race, each student trying to assemble an arsenal of operators to outperform the others.

## Why understand big numbers?

The key to winning the big number contest is an intuitive understanding for how numbers get bigger, which also happens to be the key to understanding how computational processes get longer. Suppose you wish to compute the Fibonacci sequence of 1, 1, 2, 3, 5, 8, 13, 21, 34, ... (where each number is the sum of the two that precede it). You could write a Python function that takes in a number `n`, and produces the `n`th Fibonacci number by either producing `1` if you are asking for the 1st or 2nd number, or producing the sum of the two preceding Fibonacci numbers for any other number.

```python
def fib(n):
	if n < 3:
		return 1
	else:
		return fib(n - 1) + fib(n - 2)

# Print out the first 50 numbers
for x in range(1, 50):
	print "fib(" + str(x) + ") = " + fib(x)
```

When students run this program, they will see the Fibonacci sequence printing out, but each successive term will take an exponentially longer time to calculate. I'll first explain to them how the `fib` function is akin to asking a question - "give me the `n`th Fibonacci number". Then, I draw out the method calls, so it becomes more intuitive why it is taking longer and longer to calculate the next number.

![](https://upload.wikimedia.org/wikibooks/en/3/37/Algorithms-F6CallTree.png)

Asking `fib` for the 6th Fibonacci number involves it asking `fib` for the 5th and 4th Fibonacci number. For each number, `fib` is used two times, so the total number of questions asked increases *exponentially*.

## End it with a story

There is the legend of the creator of chess, whose board game was so captivating that he was invited to a king's court to ask for a reward of his own choosing. He did not seek royal status or riches - only rice. He asked the king to place one grain of rice on the first square of the chessboard, then place two grains on the next square, and so on. He asked that the king keep doubling the amount of rice on each square, and give him the total amount of rice on the chessboard. The king immediately agreed to the seemingly modest request.

```python
rice = 1
riceOnSquare = []

# For 64 squares
for square in range(64):
	riceOnSquare.append(rice)	# Put the rice on the square
	rice = rice * 2				# Double the amount of rice

print sum(riceOnSquare)
```

The total number of rice grains would be `18446744073709551615`, which would be more rice than all the kingdoms of the world could produce in a million years.
