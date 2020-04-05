import {getDefaultOwner, setDefaultOwner} from './defaultOwner';
import {readingsOutsideRange, NumberRange} from './reading';

const specialship = {};
specialship.owner = getDefaultOwner();

setDefaultOwner({firstName: '레베카', lastName: '파슨 스'});

const station = {
    name: 'ZB1',
    readings: [
        {temp: 47, time: "2016-11-10 09:10"},
        {temp: 53, time: "2016-11-10 09:20"},
        {temp: 58, time: "2016-11-10 09:30"},
        {temp: 53, time: "2016-11-10 09:40"},
        {temp: 51, time: "2016-11-10 09:50"},
    ]
};

const operatingPlan = {
    temperatureFloor: 0,
    temperatureCeil: 0,
};

alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeil);
