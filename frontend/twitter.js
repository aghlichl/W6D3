const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(() => {
    // console.log('hi');
    const fts = $(".follow-toggle");
    fts.each((index, element) => {
        new FollowToggle(element);
    });

    const uns = $('.user-search');
    uns.each((index, element) => {
        new UsersSearch(element);
    });
});