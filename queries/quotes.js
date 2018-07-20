const database = require("../connection");

module.exports = {
    list(){
        return database('quotes_table');
    },
    read(id){
        return database('quotes_table').where('id', id).first();
    },
    create(quotes_table){
        return database('quotes_table').insert(quotes_table).returning('*').then(record => record[0])
    },
    update(id, quotes){
        return database('quotes_table').update(quotes_table).where('id', id).returning('*').then(record => record[0])
    },
    delete(id){
        return database('quotes_table').where('id', id).del()
    }
}