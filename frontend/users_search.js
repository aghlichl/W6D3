const apiUtil = require('./api_util');

class UserSearch {
    constructor($el) {
        this.$el = $($el);
        this.input = this.$el.input;
        this.ul = this.$el.ul;
        this.handleInput();
        debugger
    }

    handleInput() {
        debugger
        this.input.on('change', (e) => {
            debugger
            e.preventDefault();
            apiUtil.searchUsers(this.input.value)
        })
    }
}

module.exports = UserSearch;