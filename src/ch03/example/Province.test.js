import {Province} from './Province';
import {sampleProvinceData} from './index';
import {expect} from 'chai';

describe('province', function() {
    it ('shortfall', function() {
        // 픽스처: 테스트에 필요한 데이터와 객체를 설정
        const asia = new Province(sampleProvinceData());

        // 검증
        expect(asia.shortfall).equal(5);
    });
});