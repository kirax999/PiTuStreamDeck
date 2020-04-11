var socket = io.connect(window.location.origin);

$(".ClickFunc").click(function () {
    var id = $(this).attr('id');
    console.log(id);
    socket.emit("play", id);
});