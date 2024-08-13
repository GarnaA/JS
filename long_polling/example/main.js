//Sample code for the subscribe client function that implements long polls:
async function subscribe() {
  let response = await fetch("/subscribe");
  
  if (response.status == 502) {
    await subscribe();
  } else if (response.status != 200) {
    showMessage(response.statusText);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await subscribe();
  } else {
    let message = await response.text();
    showMessage(message);

    await subscribe();
  }
}
  
subscribe();