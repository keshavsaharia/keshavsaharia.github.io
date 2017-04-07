Suppose you write the Python code below to print "hello" ten times.

```python
x = 0
while x < 10:
	print "hello"
```

In the loop, `x` needs to increase by some amount (e.g. `x = x + 1`), otherwise `x` will remain and 0 and thus be less than 10 forever. If you run the code above, it will print "hello" endlessly - it will never **halt**.

Although the above example is uncommon, a programmer may cause endless repetitions of instructions in a more complex way, such as a loop that only exits when `x` is less than `y`. Since `y` grows faster than `x` every time `x < y`, `x` will never reach or exceed the value of `y`.

```python
x = 1
y = 10

while x < y:
	x = x + 2
	y = y + 3

print "x reached the value of y"
```

This is an example of a program that doesn't *halt*, and is exactly the kind of program your company doesn't like because it wastes time. They ask you to write a Python function called `runsForever`, which takes in a Python program along with the input to that Python program, and returns `True` if the program runs forever, and `False` otherwise.

For example, you could catch instances of the example

You couldn't just run the code for 100 hours and assume it runs forever if it takes longer than that, because maybe the program ends after 101 hours. By the same reasoning, you couldn't even assume it takes the lifetime of the universe to run the program, because perhaps it is just that complicated of a program that it takes trillions rather than billions of years to finally reach an answer.

But suppose there *was* some clever analytical method out there that uses some kind of advanced artificial intelligence to look at programs and deduce whether they run forever or not. Call this theoretical function `runsForever` - it takes in a `program` and an `input`, where `program` is a string containing a single Python program, and `input` is a piece of data given to that program that may influence what the program does.

```
def runsForever(program, input):
	# Insert cleverly written code here that analyzes the program,
	# either by consulting the ultra-intelligent artificial intelligence
	# or some equally effective method that we are currently unaware of
	# ...

	if *cleverly written code deduced it runs forever*:
		return True
	else:
		return False
```

In the pseudocode above, I was assuming that *cleverly written code* is some complicated program written by an infallible programmer that mimics the thought process your brain went through when deducing whether the example programs above run forever or eventually end.

Your coworkers are pleased, because they can now do things like

```python
if runsForever("x = 1; y = 1; for z in range(4, 10): ...", "any data"):
	print "Don't run this program, it will run forever!"
else:
	print "The program is safe to run."
```

They don't need to wait around anymore for programs that loop endlessly to reach their conclusion - they can simply pass them to the `runsForever` function.

One of your more astute coworkers notices an interesting contradiction. Suppose you give the `runsForever` function a certain program and *the program itself* as an input. Programs are just lists of information describing a process, so they can be the input to a program just as they can be the program itself. Suppose you wrote a function that, given a certain program, loops endlessly if the program runs forever when given itself as an input, and returns `True` otherwise.

```python
def contradiction(program):
	if runsForever(program, program):
		# Do nothing, just repeat forever
		while 1 < 2:
			continue
	else:
		return True
```

The `contradiction` function will either run forever, or return `True`. Here is where the contradiction arises - suppose you now ask the `contradiction` function to analyze itself running on a certain program. That is, you do something like

```python
p = "contradiction(*some program goes here*)"

if contradiction(p):
	# do something
```

Suppose the code above ran forever - that means that `runsForever(p, p)` returned `True`, putting the program into an infinite loop. But this means the original instruction `contradiction(p)` should *stop* if given itself as an input, because `runsForever` would return `False`. Conversely, if the code above stops and returns `True`, then `runsForever(p, p)` returned `False`, which means `contradiction(p)` should actually run forever when given itself as an input. In either case, there is a contradiction as to whether the program terminates or loops forever when asked to examine itself.

The contradiction in this result is often more clearly summarized by Kurt Godel's Incompleteness Theorem. Suppose you had an *oracle* - a magical box that could always tell you if a statement is true or false. Suppose you gave the oracle the question "The oracle will answer that this statement is false." If the oracle answers that the statement is true, then it creates a contradiction, as it is stating that the oracle will answer false when it has answered true. If it answers that the statement is false, then there is also a contradiction by that same logic.

Here is an excellent answer on the CS StackExchange about [why the halting problem is important](http://cs.stackexchange.com/a/32853).
