let defaultOwner = {firstName: 'sim', lastName: 'myoungsub'};
const specialship = {};
specialship.owner = defaultOwner;

defaultOwner = {firstName: '레베카', lastName: '파슨 스'};

function getDefaultOwner() {
    return defaultOwner;
};

function setDefaultOwner(arg) {
    defaultOwner = arg;
};