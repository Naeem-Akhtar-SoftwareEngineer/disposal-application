jQuery(document).ready(function($) {
    "use strict";


    /*
    Datepicker JQuery code */
    if ($('.tnit-datepicker').length) {
        $( ".tnit-datepicker" ).datepicker();
    }


    /*  Selected Button Tab for complete section Jquery Code */
    if($('.tnit-tabs-nav > li').length){
        $('.tnit-tabs-nav > li').on('click', function(event){
            $( ".tnit-tabs-nav > li" ).prev('.tnit-tabs-nav li.active').addClass('selected').siblings();
        });
    }

    /* Next Button Click Tab Open Jquery Code */
    if($('.tnit-next-btn').length){
        $('.tnit-next-btn').on('click', function(event){
            $( ".tnit-tabs-nav > li.active" ).next().addClass('active selected').siblings().removeClass('active');
            $( ".tnit-tabs-nav > li.active" ).prev('.tnit-tabs-nav li').addClass('selected').siblings();
            $( ".tnit-tabs-nav > li.active > a" ).attr("aria-expanded","true");
            $( ".tab-content > .tab-pane.active" ).next().addClass('active').siblings().removeClass('active');
            event.preventDefault();
            return false;
        });
    }


    /* Start Date of Calendar Jquery Code */
    if($('#calendar-Startdate').length){
        $(function() {
            var array = ["2018-11-8", "2018-10-5", "2017-08-16"]

              var today = new Date();
              $("#calendar-Startdate").datepicker({
                dateFormat: 'dd MM yy',
                beforeShowDay: function(date) {
                  var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
                  if (contains(array,string)) {
                    debugger;
                    return [false, '']
                  } else {
                    var day = date.getDay();
                    return [(day != 0), ''];
                  }
                },
                //beforeShowDay: $.datepicker.noWeekends,
                firstDay: 1,
                minDate: today.getHours() >= 14 ? 5 : 1,
                maxDate: '+6m',
               
              });
        });

        function contains(a, obj) {
            var i = a.length;
            while (i--) {
               if (a[i] === obj) {
                   return true;
               }
            }
            return false;
        }
    }

    /* End Date of Calendar Jquery Code */
    if($('#calendar-Enddate').length){
        $(function() {
            var array = ["2019-11-7", "2018-10-5", "2017-08-16"]

              var today = new Date();

              $("#calendar-Enddate").datepicker({
                dateFormat: 'dd MM yy',
                beforeShowMonth: function(date) {
                  var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
                  if (contains(array,string)) {
                    debugger;
                    return [false, '']
                  } else {
                    var day = date.getMonth();
                    return [(day != 0), ''];
                  }
                },
                //beforeShowDay: $.datepicker.noWeekends,
             
                firstMonth: 3,
                minDate: today.getHours() >= 48 ? 10 : 13,
                maxDate: '+1y',
               
              });
        });

        function contains(a, obj) {
            var i = a.length;
            while (i--) {
               if (a[i] === obj) {
                   return true;
               }
            }
            return false;
        }
    }

    /* Modal Box Jquery Code */
    if($('#tnit-modal-box').length){
      $('#tnit-modal-box').modal();
    }

    /* Modal Box Two Jquery Code */
    if($('#tnit-modal-box_v2').length){
      $('#tnit-modal-box_v2').modal();
    }


    });

