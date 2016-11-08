var motd = "\n\
Welcome to hunterconnelly.com!\n\
Type \"help\" to see a list of available commands\n\
"

var helpText = "\n\
Command      Usage\n\
================================================================================\n\
help:        Displays this message\n\
explain.sh:  Explains what exactly you're seeing right now\n\
contact.pl:  Prints my contact information to the terminal\n\
reddit.py:   Redirects to /r/all\n\
github.rb:   Redirects to Github\n\
exit:        Exits the terminal\n\
clear:       Clears all text from the terminal\n\
"

var contactText = "\n\
Name:   Hunter Connelly\n\
Email:  hunterconnelly@hunterconnelly.com\n\
Phone:  407-451-1421\n\
"

var explainText = "\n\
This is an interactive webpage that works like a terminal emulator! I made this\n\
using JQuery and a library called JQuery Terminal. This library allows me to\n\
turn a <div> element into a \"terminal\". When you input a command, it is sent to\n\
a switch statement that decides what to do.\n\
\n\
The library can be found at the following URL:\n\
http://terminal.jcubic.pl\n\
And of course, the Github repo for this site can be found at this one:\n\
https://github.com/HunterConnelly/hunterconnelly.com\n\
"

var exitText = "\n\
You can't actually exit this terminal because JavaScript can't close windows\n\
(or tabs) that it didn't create. Sorry about that.\n\
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
