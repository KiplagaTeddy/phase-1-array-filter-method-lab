const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, Bobby) {
    return drivers.filter(
    (Sammy) => Sammy.toLowerCase() === Bobby.toLowerCase()
    );
}

function fuzzyMatch(drivers, y) {
    return drivers.filter(
    (Bo) =>
    Bo.toLowerCase().indexOf(y.toLowerCase()) === 0
    );
}

function matchName(drivers, name) {
    return drivers.filter((record) => record.name === name);
  }