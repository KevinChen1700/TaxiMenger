(function ($) {
    $(function () {

        $('.button-collapse').sideNav();
        $('#modal1').modal();
        $('#modal2').modal();
        $('.timepicker').pickatime({
            default: '12:00', // Set default time: 'now', '1:30AM', '16:30'
            fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
            twelvehour: false, // Use AM/PM or 24-hour format
            donetext: 'OK', // text for done-button
            cleartext: 'Clear', // text for clear-button
            canceltext: 'Cancel', // Text for cancel-button
            autoclose: false, // automatic close timepicker
            ampmclickable: true, // make AM PM clickable
            aftershow: function () { } //Function for after opening timepicker
        });
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 5, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Leeg',
            close: 'Ok',
            formatSubmit: 'dd/MM/yyyy',
            closeOnSelect: false // Close upon selecting a date,
        });

        $('.factuur').prop('disabled', true);

        $(document).ready(function () {
            $('#herhaler').prop('disabled', true);
            $('select').material_select();
        });

        $("#table tr").click(function () {
            $(this).addClass('selected').siblings().removeClass('selected');
            var value = $(this).find('td:first').html();
            alert(value);
        });

        $(document).ready(function () {
            $('.modal-trigger').leanModal({
                dismissible: false
            });
        });

        $('#zelfde').click(function () {
            if ($(this).is(':checked')) {
                $('.factuur').prop('disabled', false);
            }
            else {
                $('.factuur').prop('disabled', true);
            }
        });

		$('#herhalen').click(function () {
			if ($(this).is(':checked')) {
				$('#herhaler').prop('disabled', false);
				$('.begindat').prop('disabled', true);
				$('.einddat').prop('disabled', true);
				$('select').material_select();
			}
			else {
				$('#herhaler').prop('disabled', true);
				$('.begindat').prop('disabled', true);
				$('.einddat').prop('disabled', true);
				$('select').material_select();
			}
        });

        //Als een popup word geopend voor een nieuwe rit aanmaken word de huidige datum gecopieerd na het formulier.
		$(".modal-trigger").click(function () {
		    var addressValue = $(this).attr('href');
		    if (addressValue === "#modal1") {
		        //toeweizen van value van input tot input.
		        inputdatum = $('#ritten-datepicker').val();
		        $("#modal1-datum").val(inputdatum);
		        //Label activeren zodat die niet dwars door datum staat.
		        $("#modal1-datum-label").addClass("active");
		    } else {
		        return;
		    }
		});

    }); // end of document ready
})(jQuery); // end of jQuery name space

function onInputKlant() {
    var val = document.getElementById("klanten").value;
    var opts = document.getElementById('klantenlijst').childNodes;
    for (var i = 0; i < opts.length; i++) {
        if (opts[i].value === val) {
            //alert(opts[i].value);
            
            klantid = $(opts[i]).attr('klantid');
            klantnaam = $(opts[i]).attr('klantnaam');
            klanttelnummer = $(opts[i]).attr('klanttelnummer');
            klanthulpmiddel = $(opts[i]).attr('klanthulpmiddel');
            klantwoonplaats = $(opts[i]).attr('klantwoonplaats');
            klantbijzonderheden = $(opts[i]).attr('klantbijzonderheden');
            klantfactuuradres = $(opts[i]).attr('klantfactuuradres');
            klantdebiteurnummer = $(opts[i]).attr('klantdebituernummer');


            

            document.getElementById('modal1-klantid').value = klantid;
            document.getElementById('modal1-naam').value = klantnaam;
            $('#modal1-naam-label').addClass("active");
            document.getElementById('modal1-telefoon').value = klanttelnummer;
            $('#modal1-telefoon-label').addClass("active");
            document.getElementById('modal1-woonplaats').value = klantwoonplaats;
            $('#modal1-woonplaats-label').addClass("active");
            document.getElementById('modal1-hulpmiddelen').value = klanthulpmiddel;
            $('#modal1-hulpmiddelen-label').addClass("active");
            document.getElementById('modal1-bijzonderheden').value = klantbijzonderheden;
            $('#modal1-bijzonderheden-label').addClass("active");

        }
    }
}
function onInputAuto() {
    var val = document.getElementById("auto").value;
    var opts = document.getElementById('autolijst').childNodes;
    for (var i = 0; i < opts.length; i++) {
        if (opts[i].value === val) {
            document.getElementById('modal1-autoid').value = $(opts[i]).attr('autoid');
        }
    }
}
function onInputChauffeur() {
    var val = document.getElementById("chauffeur").value;
    var opts = document.getElementById('chauffeurlijst').childNodes;
    for (var i = 0; i < opts.length; i++) {
        if (opts[i].value === val) {
            document.getElementById('modal1-chauffeurid').value = $(opts[i]).attr('chauffeurid');
        }
    }
}
function modal2_onInputKlant() {
    var val = document.getElementById("modal2-klanten").value;
    var opts = document.getElementById('modal2-klantenlijst').childNodes;
    for (var i = 0; i < opts.length; i++) {
        if (opts[i].value === val) {
            //alert(opts[i].value);

            klantid = $(opts[i]).attr('klantid');
            klantnaam = $(opts[i]).attr('klantnaam');
            klanttelnummer = $(opts[i]).attr('klanttelnummer');
            klanthulpmiddel = $(opts[i]).attr('klanthulpmiddel');
            klantwoonplaats = $(opts[i]).attr('klantwoonplaats');
            klantbijzonderheden = $(opts[i]).attr('klantbijzonderheden');
            klantfactuuradres = $(opts[i]).attr('klantfactuuradres');
            klantdebiteurnummer = $(opts[i]).attr('klantdebituernummer');




            document.getElementById('modal2-klantid').value = klantid;
            document.getElementById('modal2-naam').value = klantnaam;
            $('#modal2-naam-label').addClass("active");
            document.getElementById('modal2-telefoon').value = klanttelnummer;
            $('#modal2-telefoon-label').addClass("active");
            document.getElementById('modal2-woonplaats').value = klantwoonplaats;
            $('#modal2-woonplaats-label').addClass("active");
            document.getElementById('modal2-hulpmiddelen').value = klanthulpmiddel;
            $('#modal2-hulpmiddelen-label').addClass("active");
            document.getElementById('modal2-bijzonderheden').value = klantbijzonderheden;
            $('#modal2-bijzonderheden-label').addClass("active");

        }
    }
}
function modal2_onInputAuto() {
    var val = document.getElementById("modal2-auto").value;
    var opts = document.getElementById('modal2-autolijst').childNodes;
    for (var i = 0; i < opts.length; i++) {
        if (opts[i].value === val) {
            document.getElementById('modal2-autoid').value = $(opts[i]).attr('autoid');
        }
    }
}
function modal2_onInputChauffeur() {
    var val = document.getElementById("modal2-chauffeur").value;
    var opts = document.getElementById('modal2-chauffeurlijst').childNodes;
    for (var i = 0; i < opts.length; i++) {
        if (opts[i].value === val) {
            document.getElementById('modal2-chauffeurid').value = $(opts[i]).attr('chauffeurid');
        }
    }
}