'use strict';

const generateListItemHTML = function(userInput) {
  return `
    <li>
    <span class="shopping-item">${userInput}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
  `;
};

$(function() {
  // Append items to the list
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    let userInputField = $('.js-shopping-list-entry');
    let userInput = userInputField.val();
    userInputField.val('');

    // Add our HTML to the DOM
    $('.shopping-list').append(generateListItemHTML(userInput));
  });

  // Toggling the checked state of shopping items
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).parent().prev('.shopping-item').toggleClass('shopping-item__checked');
  });

  // Remove items on button press
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(event.currentTarget).parents('li').remove();
  });

});