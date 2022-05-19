# Instructions  

---

Imagine that you are a programming instructor
or a computer science professor. You have
maximum character counts and maximum 
line counts for the code that students
turn in.

Inside 'App.jsx', use a state variable to track and update the
current text string inside the textarea. Pass that
variable to the `<Length />` component as a prop. 
Inside 'Length.jsx', calculate the number of characters
and the number of lines in the input and update the
`<p>` tags' contents accordingly.

If the number of characters or the number of lines exceed
the maximum, give the text "x characters" or "y lines" 
a font color of red.