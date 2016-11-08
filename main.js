var motd = "\
Welcome to hunterconnelly.com!\
Type \"help\" to see a list of available commands\
"

var helpText = "\
Command      Usage\
================================================================================\
help:        Displays this message\
explain.sh:  Explains what exactly you're seeing right now\
contact.pl:  Prints my contact information to the terminal\
reddit.py:   Redirects to /r/all\
github.rb:   Redirects to Github\
exit:        Exits the terminal\
clear:       Clears all text from the terminal\
"

var contactText = "\
Name:   Hunter Connelly\
Email:  hunterconnelly@hunterconnelly.com\
Phone:  407-451-1421\
"

var explainText = "\
This is an interactive webpage that works like a terminal emulator! I made this\
using JQuery and a library called JQuery Terminal. This library allows me to\
turn a <div> element into a \"terminal\". When you input a command, it is sent to\
a switch statement that decides what to do.\
\
The library can be found at the following URL:\
http://terminal.jcubic.pl\
And of course, the Github repo for this site can be found at this one:\
https://github.com/HunterConnelly/hunterconnelly.com\
"

var exitText = "\
You can't actually exit this terminal because JavaScript can't close windows\
(or tabs) that it didn't create. Sorry about that.\
"

$(function(){
    $("#term").terminal(function(command, term){
	// Terminal commands are defined in this switch statement.
	switch(command) {
	case "":
	    term.echo("")
	    break;
	case "help":
	    term.echo(helpText)
	    break;
	case "contact.pl":
	    term.echo(contactText)
	    break;
	case "explain.sh":
	    term.echo(explainText)
	    break;
	case "reddit.py":
	    window.location = "https://reddit.com/r/all";
	    break;
	case "github.rb":
	    window.location = "https://github.com";
	    break;
	case "exit":
	    term.echo(exitText)
	    break;
	default:
	    term.echo(command + ": Command not found")
	    break;
	}
    }, {
	/*
	These settings control the terminal's appearance and functionality. Each
	setting is documented at the following URL.
	http://terminal.jcubic.pl/api_reference.php
	*/
	greetings: motd,
	prompt: "root@localhost:~$ ",
	scrollOnEcho: true,
	completion: ["help","contact.pl","explain.sh","reddit.py","github.rb","exit"],
	exit: false
    });
});
