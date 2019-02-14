const APIUtil = {
    followUser: (id) => {
        return $.ajax({
            url: `/users/${id}/follow`,
            type: 'POST',
            dataType: 'JSON',
        });
    },

    unfollowUser: (id) => {
        return $.ajax({
            url: `/users/${id}/follow`,
            type: 'DELETE',
            dataType: 'JSON',
        });
    },

    searchUsers: (queryVal) => {
        return $.ajax({
            url: `/users/search`,
            type: 'GET',
            data: queryVal,
            dataType: 'JSON',
        })
    }
}

module.exports = APIUtil