import {setDefaultOwner, getDefaultOwner} from './defaultOwner';
import {expect} from 'chai';

describe('defaultOwner', function() {
    it ('getDefaultOwner', function() {
        expect(getDefaultOwner()).include({firstName: 'sim', lastName: 'myoungsub'});
    });

    it ('return reference no dependency', function() {
        const defaultOwner = getDefaultOwner();
        defaultOwner.firstName = 'kim';
        expect(getDefaultOwner()).include({firstName: 'sim', lastName: 'myoungsub'});
    });

    it ('setDefaultOwner', function() {
        setDefaultOwner({firstName: 'kim', lastName: 'myoungsub'});
        expect(getDefaultOwner()).include({firstName: 'kim', lastName: 'myoungsub'});
    });
});