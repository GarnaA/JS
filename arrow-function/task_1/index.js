//change function expression to arrow function

/*function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("You have agreed"); },
  function() { alert("You have declined"); }
);*/

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree? ",
    () => alert("You have agreed"),
    () => alert("You have declined")
);