$(function () {
    var step = 1;
    var btnNext = $('.test__btn--next');
    var testItem = $('.test__item');
    var stepHtml = $('.test__number');

    testItem.hide();
    $(`#test-item-${step}`).show();
    stepHtml.html(step);

    btnNext.on('click', function () {
        if ($(`#test-item-${step} input:checked`).length == 0) {
            $(`#test-item-${step} .test__error`).css({
                'opacity': '1'
            });
        } else {
            testItem.hide();
            step += 1;
            $(`#test-item-${step}`).show();
            stepHtml.html(step);
        }
    });
})