function Terminal(element, state) {
	this.element = element

	// History of commands
	this.history = []
	this.historyIndex = 0

	// Load history from local storage
	if (window.localStorage && window.localStorage.getItem('history')) {
		this.history = window.localStorage.getItem('history').split('\n')
	}

	// Set the working directory
	this.state = state
	this.pwd = state.pwd || '/'
	this.fs = state.fs || {}
	this.startRead()
}

Terminal.prototype.startRead = function() {
	var terminal = this

	var promptElement = document.createElement('span')
	var inputElement = document.createElement('input')
	var readElement = document.createElement('p')

	var promptText = '$ ' + this.pwd + ' > '
	promptElement.innerText = promptText
	inputElement.style.marginLeft = promptText.length * 5 + 'px'
	inputElement.style.placeholder = 'help'

	readElement.appendChild(promptElement)
	readElement.appendChild(inputElement)
	this.element.appendChild(readElement)

	// Submission handler
	var enteredHistory = false
	inputElement.addEventListener('keyup', function(e) {
		e.preventDefault()
		e.stopPropagation()

		if (e.which == 13)
			terminal.finishRead()
		else if (e.which == 38) {
			if (! enteredHistory) {
				enteredHistory = true
				terminal.history.push(inputElement.value)
				terminal.historyIndex = terminal.history.length - 1
			}
			terminal.previousHistory()
		}
		else if (e.which == 40)
			terminal.nextHistory()
	})

	this.inputElement = inputElement

	if (this.state.autofocus !== false)
		setTimeout(function() {
			// inputElement.focus()
		}, 100)
}

Terminal.prototype.previousHistory = function() {
	if (this.historyIndex - 1 >= 0 && this.historyIndex - 1 < this.history.length) {
		this.historyIndex--
		this.loadHistory()
	}
}

Terminal.prototype.nextHistory = function() {
	if (this.historyIndex + 1 < this.history.length) {
		this.historyIndex++
		this.loadHistory()
	}
}

Terminal.prototype.loadHistory = function() {
	this.inputElement.value = this.history[this.historyIndex]
	// this.inputElement.focus()
}

Terminal.prototype.finishRead = function() {
	var command

	if (this.inputElement) {
		// Extract the input value
		this.inputElement.setAttribute('readonly', 'true')
		command = this.inputElement.value
		this.inputElement = null

		if (command.length > 0)
			this.execute(command)

		// Add to history and update local storage
		this.history.push(command)
		if (window.localStorage) {
			window.localStorage.setItem('history', this.history.join('\n'))
		}

		this.startRead()
	}
}

Terminal.prototype.execute = function(command) {
	arg = command.split(/\s+/)

	if (Command[arg[0]]) {
		try {
			Command[arg[0]].apply(this, arg.slice(1))
		}
		catch(e) {
			// show error
		}
	}
}

Terminal.prototype.print = function(line) {
	var print = document.createElement('pre')
	print.innerText = line
	this.element.appendChild(print)
}

Terminal.prototype.scrollBottom = function() {
	// TODO: set scroll position on this.element to max
}
