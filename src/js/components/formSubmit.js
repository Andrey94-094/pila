/* eslint-disable no-undef */
// Form submit
$('form').submit(function (event) {
    event.preventDefault();

    if (typeof sessionStorage !== 'undefined') {
        if (sessionStorage.getItem('formSubmitted')) {
            if (!confirm('Вы уже отправили заявку, повторить?')) {
                return false
            }
        } else {
            sessionStorage.setItem('formSubmitted', 'true')
        }
    }
    var data = $(this).serializeArray();
    data.push({
        name: "source",
        value: "F24"
    });
    data.push({
        name: "title",
        value: "Бензопила"
    });
    data.push({
        name: "link",
        value: location.href
    });

    // console.log(JSON.stringify(data));
    // return false; // Testing

    $.ajax({
        type: "POST",
        url: atob('aHR0cHM6Ly9za2lka2EtdHV0LmJ5L2FjdGlvbi9pbmRleC5waHA='),
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        dataType: "json",
        data: data,
    }).done(function (response) {
        alert(response.text);
    }).fail(function (error, textStatus) {
        console.log(error, textStatus);
        alert('Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!');
    });

    // Event dispatcher for IE9+ included
    if (typeof (Event) === 'function') {
        document.dispatchEvent(new Event('app.form.send'));
    } else {
        var ev = document.createEvent('Event');
        ev.initEvent('app.form.send', false, false);
        document.dispatchEvent(ev);
    }

    //console.log(JSON.stringify(data))
    return false
});


$("body").mouseleave(function (event) {
    if (typeof sessionStorage !== "undefined") {
        if (!sessionStorage.getItem("modalLeaveShowed") && event.clientY < -12) {
            sessionStorage.setItem("modalLeaveShowed", "true");
            $("#modal-leave").modal("show");
        }
    }
});