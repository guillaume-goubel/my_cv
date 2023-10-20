// any css
import './global/summer_notes/summernote-lite.min.css';
import './styles/_base_admin.scss';

// any js
import './global/summer_notes/summernote-lite.min.js';

// bootstrap bundle css
// import { _tooltip } from 'bootstrap';

// bootstrap bundle js
// require('bootstrap');
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');
// require('bootstrap/js/dist/toast');

// jquery
const $ = require('jquery');
$(function() {
    
    $('#Project_descriptionFr').summernote({
        height: 450,
    });

    $('#Project_descriptionEn').summernote({
        height: 450,
    });

    $('#Interest_descriptionFr').summernote({
        height: 450,
    });

    $('#Interest_descriptionEn').summernote({
        height: 450,
    });


});