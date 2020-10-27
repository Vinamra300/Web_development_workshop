$('#exampleModal').appendTo("body").modal('show');
$('body').on('hidden.bs.modal', '#exampleModal', function () {
    $('video').trigger('pause');
    });
