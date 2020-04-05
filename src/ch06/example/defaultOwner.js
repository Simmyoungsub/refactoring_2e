let defaultOwner = {firstName: 'sim', lastName: 'myoungsub'};

export function getDefaultOwner() {
    return {...defaultOwner};
};

export function setDefaultOwner(arg) {
    defaultOwner = arg;
};