
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quotes_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes_table').insert([
        {id: 1, quote: 'I know you’re sad, so I won’t tell you \"have a good day\". Instead, I advise you to simply have a day. Stay alive, feed yourself well, wear comfortable clothes, and don’t give up on yourself just yet. It’ll be better soon. Until then, have a day.', author: 'Unknown'},
        {id: 2, quote: 'I am bent, but not broken. I am scarred, but not disfigured. I am sad, but not hopeless. I am tired, but not powerless. I am angry, but not bitter. I am depressed, but not giving up.', author: ''},
        {id: 3, quote: 'If you could only sense how important you are to the lives of those you meet; how important you can be to the people you may never even dream of. There is something of yourself that you leave at every meeting with another person.', author: 'Fred Rogers'},
        {id: 4, quote: 'There are far, far better things ahead than anything we leave behind.', author: 'C. S. Lewis'},
        {id: 5, quote: 'Although the world is full of suffering, it is also full of the overcoming of it.', author: 'Helen Keller'},
      ]);
    });
};
