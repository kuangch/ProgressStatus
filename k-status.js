/**
 * Copyright (c) 8/3/2016 kuangch All Rights Reserved.
 */

(function (window, document) {
    var kStatusHtml = '<div class="k-status" tabIndex="-1">' +
        '<div class="icon error"><span class="x-mark"><span class="line left"></span><span class="line right"></span></span>' +
        '</div>' +
        '<div class="icon success"><span class="line tip"></span> <span class="line long"></span>' +
        '<div class="placeholder"></div>' +
        '<div class="fix"></div>' +
        '</div>' +
        '<div class="icon loading">' +
        '<div class="placeholder"></div>' +
        '</div>' +
        '<div class="icon warning"><span class="body"></span> <span class="dot"></span>' +
        '<div class="placeholder"></div>' +
        '<div class="fix"></div>' +
        '</div>' +
        '<div class="icon empty"></div>' +
        '</div>';

    window.KStatus = function () {

        var STATE = {SUCCESS: 'success', ERROR: 'error', WARN: 'warn', HIDE: 'empty', LOADING: 'loading'};
        if (!arguments[0]) {
            throw new Error('please appoint div ID you want to append to');
        }
        var kStatusWrap = document.createElement('div');
        kStatusWrap.innerHTML = kStatusHtml;
        var contentView = document.getElementById(arguments[0]);
        kStatusWrap.style.marginTop = (contentView.offsetHeight - 88) / 2 + 'px';
        contentView.appendChild(kStatusWrap);

        // init icon
        var modal = kStatusWrap.querySelector('.k-status');
        var $icon_success = modal.querySelector('.icon.' + 'success');
        var $icon_loading = modal.querySelector('.icon.' + 'loading');
        var $icon_error = modal.querySelector('.icon.' + 'error');
        var $icon_warn = modal.querySelector('.icon.' + 'warning');
        var $icon_empty = modal.querySelector('.icon.' + 'empty');

        // Animate icon
        addClass($icon_loading, 'animateLoadingIcon');

        addClass($icon_success, 'animateSuccessIcon');
        addClass($icon_success.querySelector('.tip'), 'animateSuccessTip');
        addClass($icon_success.querySelector('.long'), 'animateSuccessLong');

        addClass($icon_error, 'animateErrorIcon');
        addClass($icon_error.querySelector('.x-mark'), 'animateXMark');

        addClass($icon_warn, 'animateWarnIcon');
        addClass($icon_warn.querySelector('.body'), 'pulseWarningIns');
        addClass($icon_warn.querySelector('.dot'), 'pulseWarningIns');

        // change state
        var onChange = function (stat) {
            hide(kStatusWrap.querySelectorAll('.icon'));
            show(modal);
            switch (stat) {
                case STATE.SUCCESS:
                    show($icon_success);
                    break;
                case STATE.ERROR:
                    show($icon_error);
                    break;
                case STATE.WARN:
                    show($icon_warn);
                    break;
                case STATE.HIDE:
                    show($icon_empty);
                    break;
                case STATE.LOADING:
                    show($icon_loading);
                    break;
            }
        };

        return {state: STATE, changeState: onChange};
    };

    function _hide(elem) {
        elem.style.opacity = '';
        elem.style.display = 'none';
    }

    function hide(elems) {
        if (elems && !elems.length) {
            return _hide(elems);
        }
        for (var i = 0; i < elems.length; ++i) {
            _hide(elems[i]);
        }
    }

    function _show(elem) {
        elem.style.opacity = '';
        elem.style.display = 'block';
    }

    function show(elems) {
        if (elems && !elems.length) {
            return _show(elems);
        }
        for (var i = 0; i < elems.length; ++i) {
            _show(elems[i]);
        }
    }

    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }

    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += ' ' + className;
        }
    }

})(window, document);