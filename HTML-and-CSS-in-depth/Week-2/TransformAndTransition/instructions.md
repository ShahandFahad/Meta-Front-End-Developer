Initial code for the HTML is already provided, the solution must be implemented in the CSS file.

Additionally, rules have already been added for the ‘container’ class and the ‘letters’ class along with few more properties defined using the Universal selector. You have to add the rules for other selectors as per the instructions below:

Add the following rules for the element 'p' present inside the class 'letters' using descendant selector:

**Step 1:**  Align the text to center

```
text-align: center;
```

**Step 2:**  Change the background color to RGB value of 250, 150, 100 respectively.

```
background-color: rgb(250, 150, 100);
```

**Step 3:**  Assign the width to be 70 pixels

```
width: 70px;
```

**Step 4:**  The right side of the margin should be assigned a value of 1.5 pixels

```
margin-right: 1.5px;
```

**Step 5:**  Change the radius of the border to 15 percent.

```
border-radius: 15%;
```

**Step 6:**  Now assign the color of the border an RGB value of 250, 125 and 75 respectively.

```
border-color: rgb(250, 125, 75);
```

**Step 7:**  Finally change the border style to be solid.

```
border-style: solid;
```

Create new rules for the 'even' nth child of the 'p' element that follows the class 'letters'

Make use of the descendant selector such that, once you 'hover' over the class 'letters', for the 'nth-child' of the 'p' element inside it, the rules below must be assigned:

**Step 8:**  Add a transformation where you will rotate the 'p' element tags on Y-axis by 360 degress.

```
transform: rotateY(360deg);
```

**Step 9:**  You must also show transition for this over a time span of 0.5 seconds.

```
transition: 0.5s;
```

Hint: The rules for 'even' valued children of a given selector can be specified by using a syntax such as:
selector:n-th-child(even)

Similar to the rules above, you must now create rules for the 'odd' nth-child of the 'p' element that follows the class 'letters'.

Make use of the descendant selector such that, once you 'hover' over the class 'letters', for the odd 'nth-child' of the 'p' element inside it, the rules below must be assigned:

**Step 10:**  Add a transformation where you will rotate the 'p' element tags on X-axis by 360 degress.

```
transform: rotateX(360deg);
```

**Step 11:**  You must also show transition for this over a time span of 1.5 seconds.

```
transition: 1.5s;
```

Hint: The rules for 'odd' valued children of a given selector can be specified by using a syntax such as:
selector:n-th-child(odd)