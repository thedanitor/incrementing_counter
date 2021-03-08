//counters
const counters = document.querySelectorAll(".counter");

//iterate through node list
counters.forEach(counter => {
  //change number to 0
  counter.innerText = "0";

  const updateCounter = () => {
    // get value from data-target
    // target by default is a string, but can add + in front to change to number
    const target = +counter.getAttribute("data-target");
    // value displayed in counter
    const c = +counter.innerText;
    // will increment number by target value / 200
    const increment = target / 200;
    // if c is below target
    if (c < target) {
      // inner text of counter is c + increment (rounded up with Math.ceil())
      counter.innerText = `${Math.ceil(c + increment)}`;
      // call updateCounter every 1 ms
      setTimeout(updateCounter, 1);
      // otherwise
    } else {
      // inner text is target
      counter.innerText = target;
    }
  };

  updateCounter();
});
