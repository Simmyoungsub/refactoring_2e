import {createStatementData} from './createStatementData';

export function htmlStatement(invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
    let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
    result += `<table>\n`;
    result += `<tr><th>연극</th><th>좌석수</th><th>금액</th></tr>`
    for (let perf of data.performances) {
        result += `<tr><td>${perf.play.name}</td><td>${usd(perf.amount / 100)}</td><td>(${perf.audience}석)</td>\n`;
    }
    result += `</table>`;

    result += `<p>총액: <em>${usd(data.totalAmount / 100)}</em></p>\n`;
    result += `<p>적립 포인트: <em>${data.totalVolumeCredits}점</em></p> \n`;
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD', minimumFractionDigits: 2
    }).format(aNumber);
}