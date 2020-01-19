$(functino() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
                .val()
                .trim(),
            devoured: 0
        };
        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("added new burger");
            location.reload();
        });
    })
    $(".eatburger").on("click", function(event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devoured = {
            devoured: 1
        };
        $.ajax("api/burgers", {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("burger devoured");
            location.reload();
        });
    })
});