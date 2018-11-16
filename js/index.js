const today = new Date();
  const day = today.getDay();
  const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  console.log('Today is : ${daylist[day]}.');
  let hour = today.getHours();
  const minute = today.getMinutes();
  const second = today.getSeconds();
  let prepand = (hour >= 12? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  if (hour===0 && prepand=== ' PM ') {
	  if (minute=== 0 && second===0) {
		  hour=12;
		  prepand=' Noon';
	  }
	  else {
		  hour=12;
		  prepand=' PM';
	  }
  }
	  continue from line 23 (https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php) here

