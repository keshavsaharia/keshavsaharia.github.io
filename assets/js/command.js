window.Command = {}

Command.ls = function(dir) {
	this.print(Object.keys(this.fs).join('\t\t'))
}

Command.cd = function(dir) {
	if (this.fs[dir]) {
		if (this.fs[dir].type == 'dir') {
			window.location.href = this.pwd + '/' + dir
		}
	}
}

Command.open = function(file) {
	if (this.fs[file]) {
		window.location.href = this.pwd + file
	}
}

Command.clear = function() {

}
