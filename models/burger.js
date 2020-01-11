const orm = require("")

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
}