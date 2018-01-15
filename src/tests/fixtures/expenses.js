import moment from 'moment';
export default [{
    id: '1',
    description: 'id 1',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '2',
    description: 'number 2',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'id 3',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()    
}];
