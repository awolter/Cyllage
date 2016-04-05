/* Global Variables */

imagesButton_jQ = $("#imagesButton");
layersButton_jQ = $("#layersButton");

imagesTab_jQ = $("#imagesTab");
layersTab_jQ = $("#layersTab");



// target elements with the "draggable" class
/*
interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of '
                + (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy)|0) + 'px');
        }
    });*/

interact('.draggable')
    .draggable({
        onmove: window.dragMoveListener,
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        }
    })
    .resizable({
        preserveAspectRatio: true,
        edges: { left: true, right: true, bottom: true, top: true },
        restrict: {
            restriction: "parent"
        }
    })
    .on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width  = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    });

function dragMoveListener (event) {
    var target = event.target,
    // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;



$(document).ready(function() {
    imagesButton_jQ.click(function(){
        imagesTab_jQ.show();
        layersTab_jQ.hide();
    });
    layersButton_jQ.click(function(){
        layersTab_jQ.show();
        imagesTab_jQ.hide();
    });
});