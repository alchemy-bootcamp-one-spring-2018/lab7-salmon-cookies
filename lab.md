# Assignment Overview: Lab 7

## Implement a Constructor Function

In class, we learned how to refactor a group of object literals by using a constructor function and creating instances.

Let's replace your object literals for the salmon cookie stands with a single constructor function that, when called with 'new', creates new instances.

Your code will end up with probably 1/4 the number of lines it had before refactoring, and every line of code you don't have is one you don't need to debug!

See pages 106-109 in your textbook for a constructor example... and especially focus on 108 and 109. Also refer to the demo code from class that showed how we can view a constructor function as a translation of an object literal.

## Replace the Lists with a Table

We will also be replacing the lists of data for each store, and building a **single table of data** instead! Tables are much easier to read than lists, and presenting data in a table makes analysis more intuitive and comprehensive.

What numbers should go into a table? Your client, Pat, has reviewed the lists of data you dutifully provided in the previous assignment, and has decided that's actually not the best way to view the information. Here's what Jo wants:


## User Stories (MVP)
- As a developer, I want to implement a constructor function, so that I can reuse code and eliminate much of the duplication in my JavaScript
- As a user, I want cookie sales data represented in tables rather than lists

## Technical Requirements
- Good use of a constructor function; style and syntax are correctly implemented - USE CLASS syntax
- Each cookie stand location should have a separate render() method that creates and appends its row to the table
- The header row and footer row are each created in their own stand-alone function
- Duplicate code has been removed and DRY principles are evident
- Working on a non-master branch for the day, with regular commit history. Basically, every time you get something to work, you should do a commit. But you only need to push every couple of hours or so, tops.

## User Stories (Stretch... NOT REQUIRED)
- As a developer, I will continue to work on design aspects of the public-facing page.
- As a developer, to facilitate design work, I will build a style guide.
- As a developer, to demonstrate to my client my ability to add value, I will create a second table that will help Jo manage staffing. Using the basic rubric that single Salmon Cookie Tosser can serve 20 customers per hour, and that each location should have a minimum of two Salmon Cookie Tossers on shift at all times, calculate how many Salmon Cookie Tossers are needed at each location each hour.
