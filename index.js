/* global $*/
'use strict';

const main = () => {
  handleQuantityChange();
  handleImageChange();
  $('#menu').slicknav({
    label:'',
    brand:'LOGO'
  });
};

// Update price based on quanitity
const handleQuantityChange = () => {
  $('.quanitity-control').on('click', () => {
    const val = $('#amount').val() * 120;
    $('#price').text(val);
  });
};

// Update image based on click
const handleImageChange = () => {
  $('#product-gallery-1').on('click', () => {
    const src = $('#product-gallery-1').attr('src');
    $('#main-product-image').attr('src', src);
  });

  $('#product-gallery-2').on('click', () => {
    const src = $('#product-gallery-2').attr('src');
    $('#main-product-image').attr('src', src);
  });

  $('#product-gallery-3').on('click', () => {
    $('#main-product-image').attr('src', 'img/main-img.png');
  });
};



$(main);