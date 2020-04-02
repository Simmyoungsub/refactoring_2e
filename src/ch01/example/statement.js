import {createStatementData} from './createStatementData';

export function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`;

    for (let perf of data.performances) {
        result += `${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience}석) \n`;
    }

    result += `총액: ${usd(data.totalAmount / 100)}\n`;
    result += `적립 포인트: ${data.totalVolumeCredits}점 \n`;
    return result;

    function usd(aNumber) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD', minimumFractionDigits: 2
        }).format(aNumber);
    }
}