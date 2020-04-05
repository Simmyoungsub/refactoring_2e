import {readingsOutsideRange, NumberRange} from './temperature';
import {expect} from 'chai';

describe('readings', function() {
    let station = null;
    let temperatureRange = null;

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

        temperatureRange = {
            temperatureFloor: 50, // 최저 온도
            temperatureCeil: 52, // 최고 온도
        };

    });

    it ('readingsOutsideRange', function() {
        const range = new NumberRange(temperatureRange.temperatureFloor, temperatureRange.temperatureCeil);
        const alerts = readingsOutsideRange(station, range);
        expect(alerts.length).eq(4);
    });
});