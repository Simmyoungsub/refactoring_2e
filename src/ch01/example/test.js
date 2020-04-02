import plays from './plays.json';
import invoices from './invoices.json';
import {htmlStatement} from './statement';

const smt = htmlStatement(invoices[0], plays);
console.log(smt);