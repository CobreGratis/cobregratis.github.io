$(document).ready(function () {
  $('input.addDatepicker').datepicker({
    buttonImage:'images/datepicker.gif',
    buttonImageOnly:false,
    changeMonth:true, // Allows you to change the month by selecting from a drop-down list.
    changeYear:true, // Allows you to change the year by selecting from a drop-down list. You can enable this feature by setting the attribute to true. Use the yearRange option to control which years are made available for selection.
    constrainInput:true, // When true entry in the input field is constrained to those characters allowed by the current dateFormat.
    duration:'fast', // Control the speed at which the datepicker appears, it may be a time in milliseconds or a string representing one of the three predefined speeds ("slow", "normal", "fast").
    firstDay:1, // Set the first day of the week: Sunday is 0, Monday is 1, ...
    numberOfMonths:1,
    showAnim:'show', // Set the name of the animation used to show/hide the datepicker. Use 'show' (the default), 'slideDown', 'fadeIn', any of the show/hide jQuery UI effects, or '' for no animation.
    showOn:'button', // Have the datepicker appear automatically when the field receives focus ('focus'), appear only when a button is clicked ('button'), or appear when either event takes place ('both').
    showOtherMonths:true
  });
});