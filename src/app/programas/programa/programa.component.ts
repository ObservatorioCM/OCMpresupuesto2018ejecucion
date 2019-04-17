import { Component, OnInit } from '@angular/core';
/* declare var $: any;

$(document).ready(function() {
  console.log('Pagina cargada');
  $('h1').text('Hola desde jquery');
  $.getScript('//harvesthq.github.io/chosen/chosen.jquery.js')
    .done(function(script, textStatus) {
      $('.chosen-select').chosen({no_results_text: 'Oops, no se ha encontrado nada!'});
    })
    .fail(function(jqxhr, settings, exception) {
      alert('Error en programa.component.ts');
    });
});

    $(function () {
      let countryOptions;
     $.getJSON('/assets/data/programas.json', function (result) {
     $.each(result, function (i, programa) {
    // <option value='countrycode'>contryname</option>
    // countryOptions += '<option value =' + country.code + '>' + country.name + '</option>';
    countryOptions += '<option value =' + '>' + programa.DesPro + '</option>';
     $('#country').html(countryOptions);
      });
      });
      }); */

@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.css']
})

export class ProgramaComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
