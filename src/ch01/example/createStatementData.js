class PerformanceCaculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
        throw new Error('서브 클래스를 정의해주세요.');
    }

    get volumeCredits() {
        let result = 0;
        result += Math.max(this.performance.audience - 30, 0);
        
        if ('comedy' === this.play.type) {
            result += Math.floor(this.performance.audience / 5);
        }

        return result;
    }
}

class TragedyCaculator extends PerformanceCaculator {
    get amount() {
        let result = 40000;
        if (this.performance.audience > 30) {
            result += 1000 * (this.performance.audience - 30);
        }

        return result;
    }
}

class ComedyCaculator extends PerformanceCaculator {
    get amount() {
        let result = 30000;

        if (this.performance.audience > 20) {
            result += 10000 + 500 * (this.performance.audience - 20);
        }

        result += 300 * this.performance.audience;

        return result;
    }
}

function createPerformanceCaculator(aPerformance, aPlay) {
    switch (aPlay.type) {
        case 'tragedy':
            return new TragedyCaculator(aPerformance, aPlay);
        case 'comedy':
            return new ComedyCaculator(aPerformance, aPlay);
        default:
            throw new Error(`알수없는 장르: ${aPlay.type}`);
    }
}

export function createStatementData(invoice, plays) {
    const result = {};
    result.customer = invoice.customer;
    result.performances = invoice.performances.map(enrichPerformance);
    result.totalAmount = totalAmount(result);
    result.totalVolumeCredits = totalVolumeCredits(result);
    return result;

    function enrichPerformance(aPerformane) {
        const caculator = createPerformanceCaculator(aPerformane, playFor(aPerformane));
        const result = Object.assign({}, aPerformane);
        result.play = playFor(result);
        result.amount = caculator.amount;
        result.volumeCredits = caculator.volumeCredits;
        return result;
    }

    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }

    function totalAmount(data) {
        return data.performances.reduce((total, p) => (total + p.amount), 0)
    }

    function totalVolumeCredits(data) {
        return data.performances.reduce((total, p) => (total + p.volumeCredits), 0)
    }
}