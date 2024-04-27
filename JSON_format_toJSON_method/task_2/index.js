let room = {
    number: 23
};
  
let meetup = {
    title: "Meeting",
    occupiedBy: [{name: "Sasha"}, {name: "Masha"}],
    place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));