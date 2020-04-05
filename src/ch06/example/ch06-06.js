import {getDefaultOwner, setDefaultOwner} from './defaultOwner';

const specialship = {};
specialship.owner = getDefaultOwner();

setDefaultOwner({firstName: '레베카', lastName: '파슨 스'});
