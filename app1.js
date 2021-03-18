// Terminal Exercises


// Write the following terminal commands to perform the following tasks:

// Part I
// make a directory called first
// change directory to the first folder
// create a file called person.txt
// change the name of person.txt to another.txt
// make a copy of the another.txt file and call it copy.txt
// remove the copy.txt file
// make a copy of the first folder and call it second
// delete the second folder


// Part II
// What does the man command do? Type in man rm. How do you scroll and get out?
// Look at the man page for ls. What does the -l flag do? What does the -a flag do?
// How do you jump between words in the terminal?
// How do you get to the end of a line in terminal?
// How do you move your cursor to the beginning in terminal?
// How do you delete a word (without pressing backspace multiple times) in terminal?
// What is the difference between a terminal and shell?
// What is an absolute path?
// What is an relative path?
// What is a flag? Give three examples of flags you have used.
// What do the r and f flags do with the rm command?

// *****************************************************************************

// Part I

// make a directory called first
// mkdir first

// change directory to the first folder
// cd first

// create a file called person.txt
// touch person.txt

// change the name of person.txt to another.txt
// mv person.txt another.txt

// make a copy of the another.txt file and call it copy.txt
// cp another.txt copy.txt

// remove the copy.txt file
// rm copy.txt

// make a copy of the first folder and call it second
// cp -r first second

// delete the second folder
// rm -rf second

// *************************************************************

// Part II
// What does the "man" command do? Type in "man rm". How do you scroll and get out?
// - D or Control ⌃-D to advance half a page 
// - B or Control ⌃-B to go back one page 
// - U or Control ⌃-U to go back half a page

// Look at the man page for "ls". What does the "-l" flag do? What does the "-a" flag do?
// The `-l` flag => lists files in a list format with more detail
// The `-a` lists => all files and folders including hidden ones

// How do you jump between words in the terminal?
// Ctrl + left/right

// How do you get to the end of a line in terminal?
// Ctrl + e

// How do you move your cursor to the beginning in terminal?
// Ctrl + a

// How do you delete a word (without pressing backspace multiple times) in terminal?
// Ctrl + delete

// What is the difference between a terminal and shell?

// The terminal is a program is just an interface to the shell. 
// The shell is what actually handles commands and so forth => the terminal program just gives it a way to interact with the environment.

// What is an absolute path?
// An absolute path is a path that starts from the root route and gives the complete location for a file or folder

// What is an relative path?
// A relative path is a path that starts at the current location and not the root route

// What is a flag? Give three examples of flags you have used.
// A flag adds additional functionality to an existing command
// rm -rf folder_name (remove folder w/files)
// cp -r folder_name copy_folder_name (copying the folder)
// ls -a (to see the hidden files)

// What do the 'r' and 'f' flags do with the 'rm' command?
// rm -f (remove files)
// rm -r (remove folders and recursively go through each folder)