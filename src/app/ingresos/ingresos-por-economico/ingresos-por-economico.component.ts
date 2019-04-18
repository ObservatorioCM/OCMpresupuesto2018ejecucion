import { Component, OnInit } from '@angular/core';

declare var $: any;
// Si uso declare var viz  da error porque no esta declarada como global
let viz;
declare var tableau;

@Component({
  selector: 'app-ingresos-por-economico',
  templateUrl: './ingresos-por-economico.component.html',
  styleUrls: ['./ingresos-por-economico.component.css']
})
export class IngresosPorEconomicoComponent implements OnInit {
  datos;
  vez = 0;

  constructor() {
   // C:\Users\pc\Google Drive\Ayuntamiento\Presupuestos\Tablas
   // Tabla economicos ingresos 2018.xlsx
   // Shift-Alt-I will put a cursor at the end of all selected lines

    this.datos =
    [
      'Sobre la renta de la personas físicas',
      'Impto sobre Biene Inmuebles. Bienes Inmueb de Nat Rústica',
      'Impto sobre Bienen Inmuebles. Bienes de Naturaleza Urbana',
      'Imptos. sobre Bienes Inmuebles de características especiales',
      'Impuesto sobre Vehículos de Tracción Mecánica',
      'Impuesto sobre Incremento Valor de los Terrenos Urbanos',
      'Actividades Empresariales',
      'Distribución cuotas nacionales I.A.E.',
      'Distribución cuotas provinciales I.A.E.',
      'Impuesto sobre el Valor Añadido',
      'Impuestos sobre el alcohol y bebidas derivadas',
      'Impuesto sobre la cerveza',
      'Impuestos sobre las labores del tabaco',
      'Impuestos sobre hidrocarburos',
      'Impuestos sobre productos intermedios',
      'Impuestos sobre construcciones, instalaciones y obras',
      'Impuestos sobre gastos suntuarios cotos de caza y pesca',
      'Tasas por servicio recogida de basura',
      'Tasas prestación servicios cementerio municipal',
      'Tasas extinción de incendios y salvamentos',
      'Tasas servicios especiales de vigilancia, control prot.',
      'Tasas licencias urbanísticas',
      'Tasas licencias de aperturas',
      'Tasas por expedición de documentos',
      'Tasas retirada de vehículos',
      'Tasas por celebración de matrimonios civiles',
      'Tasas de estacionamiento de vehículos',
      'Tasa por entrada de vehículos',
      'Tasa utilización superficies y servicios estación autobús',
      'Ingresos por canalizaciones vía pública',
      'Tasas ocupación vía pública gestionada por urbanismo',
      'Tasas por alteración o interrupción del tráfico',
      'Tasas ocupación suelo, vuelo o subsuelo por empresas',
      'Compensación de Telefónica de España S.A.',
      'Tasas licencias autotaxi y vehículos de alquiler',
      'Tasas utilización puestos en mercado de abastos',
      'Tasas ocupación con mercancias, materiales de construcción',
      'Tasas ocupación con kioscos',
      'Tasas fijación anuncios y publicidad en el dominio p. local',
      'Tasas por ocupación con puestos, barracas, etc.',
      'Tasas por instalación fijas, puestos, espectáculos, etc.',
      'Ocupación vía pública con mesas y sillas',
      'PP.PP Matrículas Escuela de Música',
      'Servicios actividades de mayores',
      'PP.PP. Utilización de instalaciones deportivas',
      'PP.PP. Matrículas competiciones hípicas',
      'Inscripciones deportivas',
      'PP.PP.por ventas de entradas Museo Arqueológico',
      'PP.PP. por entradas al conjunto monumental El Alcázar',
      'PP.PP. venta de entradas pruebas hípicas',
      'PP.PP. venta de entradas Zoológico',
      'PP.PP. servicios de sanidad preventiva, desinfección, etc.',
      'Celebración eventos privados Alcázar, P. Villavicenc, S. Com',
      'Centros Sociales',
      'Celebración eventos Claustros de Santo Domingo',
      'PP.PP. servicio mantenimiento animales incautados',
      'PP.PP. servicios informáticos y telecomunicaciones',
      'Prestación de servicio recaudación',
      'Ventas de libros',
      'Ventas objetos Museo Arqueológico',
      'Venta por máquinas expendedoras',
      'Reintegro avales',
      'Otros reintegros de operaciones corrientes',
      'Anuncios a cargo de particulares',
      'Obras e instalaciones a cargo de particulares',
      'Multas por infracciones urbanísticas',
      'Multas por infracciones tributarias y análogas',
      'Multas por infracciones de la Ordenanza de circulación',
      'Otras multas y sanciones',
      'Multas de ordenanzas municipales',
      'Sanción salud pública',
      'Recargo de apremio',
      'Intereses de demora',
      'Cuotas de urbanización',
      'Otros ingresos por aprovechamientos urbanísticos',
      'Ingresos diversos',
      'IMPREVISTOS',
      'Ingresos de fincas no urbanizables',
      'Ingresos costas judiciales',
      'Ingresos por publicidad a cargo de particulares',
      'Aprovechamiento urbanístico PMS',
      'Ingresos por ejecución obras a cargo particulares',
      'Indemnizaciones en bienes y derechos',
      'Servicio recogida residuos',
      'Otras transferencias del Estado Déficit Autobuses',
      'Fondo complementario de financiación',
      'Compensación por beneficios fiscales',
      'Otras transferencias corrientes de la Administración General',
      'Conv. prestaciones básicas servicios sociales comunitarios',
      'Transferencias Instituto Nacional de Estadística',
      'De Organismo Autónomo Programas Educativos Europeos',
      'De otros Organismos Autónomos y agencias',
      'De fundaciones estatales',
      'Participacion en los tributos de la Comunidad Autónoma',
      'Transf. en materia de serv. sociales y políticas de igualdad',
      'Transferencias corrientes en cumplimiento de convenios suscr',
      'Otras transferencias corrientes en cumplimiento de convenios',
      'Otras subvenciones corrientes de la Administración General d',
      'Instituto Andaluz de la Mujer',
      'De la Agencia Andaluza de Instituciones Culturales',
      'Subvenciones Instituto Andaluz de la Juventud',
      'Subvenciones Servicio Andaluz de Empleo',
      'Diputación Provincial de Cádiz',
      'De otras Entidades que agrupen Municipios',
      'De empresas privadas',
      'Intereses de préstamos concedios a Organ. Autónomos y a',
      'Intereses de préstamos concedidos a sociedades mercantiles,E',
      'Intereses de depósito',
      'De soc y entidades no dependientes de la entidades locales',
      'Arrendamientos de fincas urbanas',
      'Concesiones administrativas',
      'Vallas publicitarias',
      'Patrocinio y publicidad Deportes',
      'Patrocinio eventos de fiestas',
      'Otros ingresos patrimoniales',
      'Patrocinio actos culturales',
      'Ingresos publicidad TV y Radio',
      'Venta de solares (No PMS)',
      'Enajenaciones PMS',
      'Transf. capital Administración Gral. del Estado',
      'Transferencias de capital en cumplimiento de convenios suscr',
      'Otras transferencias de capital en cumplimiento de convenios',
      'Otras transferencias de capital de la Administración General',
      'Transferencia de capital de Diputación Provincial de Cádiz',
      'De Entidades Locales Menores',
      'Reintegro de anticipos al personal a corto plazo',
      'Reintegro de anticipos al personal a largo plazo',
      'Para gastos con financiación afectada',
      'Préstamos recibidos a  L/P de entes del sector público',
      'Préstamo Fondo Ordenación Sentencias Judiciales Firmes',
      'PRÉSTAM RECIBIDOS A L/P DE ENTES DE FUERA DEL SECTOR PÚBLICO',
    ]
    ;
      }

   ngOnInit() {
    $(function () {
        const configChosen = {
        '.chosen-select': {},
      };

      $('.chosen-select').chosen({
        disable_search_threshold: 10,
        no_results_text: 'No encuentro ',
        // width: '65%',
       });

    });

     $('#chosen1').change(function () {
       initVizEconomicos($(this).val());
     });

let vez = 0;
function initVizEconomicos(DesEco) {
  vez += 1;
  if (vez > 1) {
    viz.dispose();
  }
  const containerDiv = document.getElementById('vizContainerEconomicos'),
    urlEconomicos = 'https://public.tableau.com/views/EstadoEjecucin2018Ingresosporaplicaciones04-04-2019MAM/Poreconmico',
    options = {
      'Descripción': DesEco,
      hideTabs: true,
      showShareOptions: true
    };
      viz = new tableau.Viz(containerDiv, urlEconomicos, options);
    }
  }
}
