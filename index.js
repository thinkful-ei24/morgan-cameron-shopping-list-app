'use strict';
$(function(){
  $('#js-shopping-list-form').on('submit', function(event){
    event.preventDefault();
    let userInputField = $('.js-shopping-list-entry');
    let userInput = userInputField.val();
    userInputField.val('');

  })
});