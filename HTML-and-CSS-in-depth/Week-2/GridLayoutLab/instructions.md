Initial code for the HTML is already provided.

The rules for different areas within the grid template area are already provided in the CSS code. 

You have to add the rules for the container class as per the instructions provided.

The two set of rules to be added for the container class will have one set for regular ‘container’ class and another using media query for a different size.

Follow the instructions below:

Make sure you check the output at every step.

First, write rules by adding properties for the ‘container’ class as below:

**Step 1:**  Add a display property that will create a grid.

```
display: grid;
```

**Step 2:**  It will have a maximum width of 900 pixels.

```
max-width: 900px;
```

**Step 3:**  The minimum height for it will be the length of 50 viewport height

```
min-height: 50vh;
```

**Step 4:**  Now you will first add rule for grid template columns that will span 100 % of the width.

```
grid-template-columns: 100%;
```

**Step 5:**  You will then add rule for grid template values for five rows, of which the middle one will have value of 1 fractional area and the rest will be set to auto.

```
grid-template-rows: auto auto 1fr auto auto;
```

**Step 6:**  Finally, you will create a grid template area that will contain five values viz. ‘header’, ‘left’, ‘main’, ‘right’ and ‘footer’

```
grid-template-areas: "header" "left" "main" "right" "footer";
```

Similar to the rules you have defined above, you will again add different set of rules inside the media query when the minimum width of the viewport is 440 pixels.

The rules to be added for the container ‘class’ will be as below:

**Step 7:**  The three grid template columns will have respective values of 150 pixels, 1 fractional area and again 150 pixels.

```
grid-template-columns: 150px 1fr 150px;
```

**Step 8:**  The three grid template rows will have the middle value of 1 fractional are, while the two others will be set to auto

```
grid-template-rows: auto 1fr auto;
```

**Step 9:**  Finally this time, you will be creating a 3 x 3 grid template area that will have only header in the first row. It will have  ‘left’, ‘main’ and ‘right’ in the second row and finally have only ‘footer’ in the last row.

```
grid-template-areas: "header header header" 
                     "left main right" 
					 "footer footer footer";
```


Open index.html in Live Preview.