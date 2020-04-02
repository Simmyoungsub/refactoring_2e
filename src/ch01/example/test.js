import plays from './plays.json';
import invoices from './invoices.json';
import {statement} from './index';

const smt = statement(invoices[0], plays);
console.log(smt);