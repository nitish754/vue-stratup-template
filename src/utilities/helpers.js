import moment from 'moment';

class Helpers{
    static formatCurrency(amount)
    {
        return `$${amount.toFixed(2)}`;
    }

    static today()
    {
        return moment().format('YYYY-MM-DD');
    }
}

export default Helpers;