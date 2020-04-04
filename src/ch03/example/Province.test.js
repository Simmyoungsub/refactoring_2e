import {Province} from './Province';
import {sampleProvinceData} from './index';
import {expect} from 'chai';

describe('province', function() {
    describe('no producers', function() {
        let noProducers;
        
        beforeEach(function() {
            const data = {
                name: 'No Producers',
                producers: [],
                demand: 30,
                price: 20,
            };
    
            noProducers = new Province(data);
        });

        it ('shortfall', function() {
            expect(noProducers.shortfall).equal(30);
        });

        it ('profit', function() {
            expect(noProducers.profit).equal(0);   
        })
    });

    it ('zero demand', function() {
        const asia = new Province(sampleProvinceData());
        
    });

    it ('shortfall', function() {
        // 픽스처: 테스트에 필요한 데이터와 객체를 설정
        const asia = new Province(sampleProvinceData());

        // 검증
        expect(asia.shortfall).equal(5);
    });

    it ('profit', function() {
        const asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230);
    });

    it ('change production', function() {
        const asia = new Province(sampleProvinceData());
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });
});