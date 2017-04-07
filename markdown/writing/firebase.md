# Getting kids started with Firebase

At [techlab](https://keshav.is/building/techlab), we held an experimental web development class where students build simple web applications with [Firebase](https://firebase.com), a cloud service that makes it easy to store and retrieve data in real-time. We would first build a simple mockup of a website with HTML and CSS, then write functions to change the website content with jQuery. Then we use Firebase to pass data to the jQuery functions, and with a few lines of code produce a real-time communication tool.

## Before you start

Each student needs a computer with a web browser and a code editor (I recommend [Sublime Text](http://www.sublimetext.com/) or [TextWrangler](http://www.barebones.com/products/textwrangler/)). Start by having students create a file with the text editor, saving it immediately as "welcome.html", then locating it on their computer and opening it with the web browser. Doing this quickly ingrains a development cycle of switching back and forth between the editor and browser as they make changes.

## HTML

The most effective analogy I have for HyperText Markup Language is that "HTML is like the structure of your house. The structure of your house defines where your roof is, where your floors are, and where the walls go to divide up the space inside." Students then construct a really simple HTML page with a header, a paragraph, an input box, and a button.

```html
<html>
	<head>
	</head>
	<body>
		<h1>This is a header</h1>
		<p>This is a paragraph</p>
		<input>
		<button>submit</button>
	</body>
</html>
```

## CSS

"CSS is like the paintings, decorations, and furniture that you put inside your house. They give your house a personal touch, and if you really put some thought into it, you can create something that evokes emotions and inspires people." I will then quickly scroll through libraries like [Bootstrap](http://getbootstrap.com/) and [Flat UI](https://designmodo.github.io/Flat-UI/), and finish with a look at Google's [Material Design specification](http://www.google.com/design/spec/material-design/introduction.html). I tend to spend the most time on material design because every kid has interacted with Google products, and can draw parallels from the specification to what they see in the real world.

To avoid confusing them over the existance of multiple files, I have them add the CSS into a `style` element on the first page, and save the explanation of linking CSS files for future projects. I first show the structure for styling each visible element in the page: `body`, `h1`, `p`, `input`, and `button`.

```html
<html>
	<head>
		<style>
		body {
			/* body styles here */
		}
		h1 {
			/* heading styles here */
		}
		p {
			/* paragraph styles here */
		}
		input {
			/* input styles here */
		}
		button {
			/* button styles here */
		}
		</style>
	</head>
	<body>
		<h1>This is a header</h1>
		<p>This is a paragraph</p>
		<input>
		<button>submit</button>
	</body>
</html>
```

[ add link to a complete example file with HTML and CSS ]

The pattern for styling elements becomes clear to them, and they can start experimenting with things like `border-radius` on buttons and `font-size` for their paragraphs. I also have them really put thought into margins, paddings, and colors. It is important at this step that students are looking at what other students are doing, so they can get some inspiration and avoid becoming lazy designers.

## JavaScript

"JavaScript is like the people in the house. They can change the decorations, add new furniture, tear down walls and erect new ones, and most importantly, communicate with their friends in other houses." I then explain to them that we're going to connect our "HTML houses" together by sharing whatever text we add to the input field with Firebase. I tell them to start by thinking of Firebase as "a group text message, where anyone sending a message will buzz the phones of everyone else".

I have them pair up with the person next to them and walk through the steps of [creating a Firebase account](https://www.firebase.com/signup/). Once they have created an account, have them create a new Firebase and double click on it to view its content.

[picture of Forge]

If you prefer students not have an account, or are concerned with their ability to follow the relatively simple setup steps, you can create and share Firebase URLs with them. They will then need to add a `script` element to their page in `body`, and import the [Firebase API]() and [jQuery](), as shown below.

```html
<html>
	<head>
		<style>
		/* styles go here */
		</style>
	</head>
	<body>
		<h1>This is a header</h1>
		<p>This is a paragraph</p>
		<input>
		<button>submit</button>
		<!--
			Give students an easy way to copy this JavaScript template, e.g. through PasteBin (pastebin.com)
		-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
		<script type="text/javascript">

		</script>
	</body>
</html>
```

Once they've created the JavaScript layout, we write functions to describe each event that could occur when our application is run.
[ more explanation about events and JavaScript functions ]

[ explanation of .on ]

[ explanation of .val ]

Remember to replace `[YOUR-FIREBASE-HERE]` with the name of your Firebase.

```javascript
var firebase = new Firebase("https://[YOUR-FIREBASE-HERE].firebaseio.com");

// When the application is started.
function start() {
	firebase.on('value', message);
	$('button').on('click', submit);
}

// When the submit button is clicked.
function submit() {
	firebase.set( $('input').val() );
	$('input').val('');
}

// When a message is received.
function message(data) {
	$('p').text( data.val() );
}

// When the document is ready, do the start function.
$(document).ready( start );
```

[ look up jQuery selector - CSS selector analogy and add here ]

They can then customize their application to prompt the user on what information to share, like compliments or advice. I encourage students to form and merge their groups organically, while the instructors ensure no student is left working alone.

```html
<html>
	<head>
		<style>
		/* styles go here */
		</style>
	</head>
	<body>
		<h1>Share a compliment</h1>
		<p> </p>
		<input>w
		<button>submit compliment</button>
		<!--
			Give students an easy way to copy this JavaScript template, e.g. through PasteBin (pastebin.com)
		-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		<script src="https://cdn.firebase.com/js/client/2.2.1/firebase.js"></script>
		<script type="text/javascript">
			var firebase = new Firebase("https://[YOUR-FIREBASE-HERE].firebaseio.com");

			function start() {
				firebase.on('value', message);
				$('button').on('click', submit);
			}

			function submit() {
				firebase.set( $('input').val() );
				$('input').val('');
			}

			function message(data) {
				$('p').text(data.val());
			}
		</script>
	</body>
</html>
```

## Share it

Students can email their HTML file to anyone who they want to use their app, or use the [Firebase command line tools]() to upload their work to Firebase Hosting. If there are privacy concerns over student data, the instructor can create multiple Firebases and set up the Firebase command line tool with their account beforehand.
