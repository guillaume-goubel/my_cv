// any css
import './styles/app.scss';

// any js

// bootstrap bundle css
import { _tooltip, _toasts, _popover, _scrollSpy } from 'bootstrap';

// bootstrap bundle js
require('bootstrap');
require('bootstrap/js/dist/tooltip');
require('bootstrap/js/dist/popover');
require('bootstrap/js/dist/toast');

// jquery
const $ = require('jquery');
$(function() {
    $('[data-toggle="popover"]').popover();
});