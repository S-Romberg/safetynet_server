const authUtils = require('../utils/auth')


exports.seed = function(knex, Promise) {
  return knex('1_Users').del()
    .then(function () {
      return knex('1_Users').insert([
        {id: 1, profile: 'https://media.licdn.com/dms/image/C4E03AQFbzrK8bLlO0w/profile-displayphoto-shrink_200_200/0?e=1537401600&v=beta&t=m0cqalV2mOzDV6KtAbIRzPZGuBYtC9hhk7CXCP_Evt4', name: 'Spencer', email: 'spencer.romberg@gmail.com', password: authUtils.hashPassword('spencer')},
        {id: 2, profile: 'https://media.licdn.com/dms/image/C4E03AQFbzrK8bLlO0w/profile-displayphoto-shrink_200_200/0?e=1537401600&v=beta&t=m0cqalV2mOzDV6KtAbIRzPZGuBYtC9hhk7CXCP_Evt4', name: 'Brevon', email: 'brevon@pleeper.com', password: authUtils.hashPassword('brevon')},
        {id: 3, profile: 'https://media.licdn.com/dms/image/C4E03AQFbzrK8bLlO0w/profile-displayphoto-shrink_200_200/0?e=1537401600&v=beta&t=m0cqalV2mOzDV6KtAbIRzPZGuBYtC9hhk7CXCP_Evt4', name: 'Kaitlin', email: 'kat@itsallergies.com', password: authUtils.hashPassword('kaitlin')}
      ]);
    });
};
