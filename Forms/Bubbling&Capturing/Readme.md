### Bubbling

A click on the inner ```<p>``` first runs onclick:

On that ```<p>```.
Then on the outer ```<div>```.
Then on the outer ```<form>```.
And so on upwards till the document object.

![event-order-bubbling](https://user-images.githubusercontent.com/27890805/28240994-ae099276-699c-11e7-9495-bb900aeede0d.png)

### Capturing

Here’s the picture of a click on ```<td>``` inside a table, taken from the specification:

![eventflow](https://user-images.githubusercontent.com/27890805/28241099-c069d1ae-699e-11e7-8486-6f193fc6c565.png)

That is: for a click on ```<td>``` the event first goes through the ancestors chain down to the element (capturing), then it reaches the target, and then it goes up (bubbles), calling handlers on its way.