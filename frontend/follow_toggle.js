const apiUtil = require('./api_util');

class FollowToggle {
    constructor($el) {
        this.$el = $($el)
        this.userId = this.$el.data('user-id');
        this.followState = this.$el.data('initial-follow-state');
        this.clicked = false;
        this.render();
        this.handleClick();
    }

    render() {
        if (this.followState === true) {
            this.$el.text("Unfollow!");
        } else if (this.followState === false) {
            this.$el.text("Follow!");
        }
    }

    handleClick() {
        this.$el.on("click", (e) => {
            e.preventDefault();
            if (this.followState === true && this.clicked === false) {
                this.clicked = true;
                apiUtil.unfollowUser(this.userId).then(() => {
                    this.followState = false
                    this.render();
                    this.clicked = false;
                });
            } else if (this.followState === false && this.clicked === false) {
                this.clicked = true;
                apiUtil.followUser(this.userId).then(() => {
                    this.followState = true
                    this.render();
                    this.clicked = false;
                });
            }
        });
    }


}

module.exports = FollowToggle;