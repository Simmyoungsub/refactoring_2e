import {readingsOutsideRange} from './reading';
import {expect} from 'chai';

describe('readings', function() {
    let station = null;
    let operatingPlan = null;

    beforeEach(function() {
        station = {
            name: 'ZB1',
            readings: [
                {temp: 47, time: "2016-11-10 09:10"},
                {temp: 53, time: "2016-11-10 09:20"},
                {temp: 58, time: "2016-11-10 09:30"},
                {temp: 53, time: "2016-11-10 09:40"},
                {temp: 51, time: "2016-11-10 09:50"},
            ]
        };

        operatingPlan = {
            temperatureFloor: 50, // 최저 온도
            temperatureCeil: 55, // 최고 온도
        };

    });

    it ('readingsOutsideRange', function() {
        const alerts = readingsOutsideRange(station, operatingPlan.temperatureFloor, operatingPlan.temperatureCeil);
        expect(alerts.length).eq(2);
    });
});