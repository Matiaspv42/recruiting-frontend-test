# Explicacion Paso a Paso

### Paso 1

Para el desarrollo de esta prueba partí testeando el endpoint, utilizando curl y thundercliente parecía funcionar bien pero cuando empecé a implemente utilizando axios empecé a tener errores cada vez que intentaba realizar una consulta get. El error que arrojaba era

`localhost/:1 Access to XMLHttpRequest at 'https://recruiting.api.bemmbo.com/invoices/pending' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

Estuve googleando para ver si existía alguna forma de solucionarlo o si yo estaba cometiendo algún error pero todas las fuentes decían que parecía ser un problema del servidor, así que después de un buen rato no podía seguir buscando porque sino no me iba a dar el tiempo y empecé el desarrollo simulando la llamada y agregando los datos a un archivo `data.js`

### Paso 2

Partí creando un componente llamado ListaFactura que es el que utilizaría para renderizar la lista de las facturas, inicilamente parti haciendo una tabla pero terminé yendo por una lista, verifiqué que estuviese renderizando todo el arreglo de `data.js` y después agregué el renderizado condicional para verificar que no sean `credit_note`. Ya en este punto empezó a hacer sentido agregar un estado para agregar las facturas y así poder ir guardando esta información en el lado del cliente.

### Paso 3

Ya listo el componente de las Facturas era momento de atacar el componente de las notas de credito y decidí agregar un nuevo componente ListaNota en el que renderizaría las notas. Nuevamente necesitaba renderizar de manera condicional y también agregué un nuevo estado para las notas de credito y así poder saber cuál nota seleccionaba el usuario. 

### Paso 4

Ahora era necesario hacer que el componente de las notas de credito solo se renderizara una vez que el usuario había seleccionado una Factura así que agregue un renederizado condicional a todo el componente de las notas de crédito y ya se había hecho evidente que iba a necesitar generar un contexto para poder pasar información a través de los componentes, por lo que cree un contexto que envolviera ambas listas.

### Paso 5

El ultimo paso era agregar el boton que desplegara el modal y que obtuviera información desde los distintos componentes. Para esto se creó el componente modal que incluye un botón el cual se renderiza solo cuando se ha elegido una factura y una nota de crédito, el modal recibe información a través del contexto global que se generó y se muestra una vez apretado el boton. Para que se renderice una vez que es presionado se creó un estado que es booleano para saber si el modal se está mostrando o no. Además se agregó el estilo condicionado a las demás componentes para que cuando la modal se esté mostrado a las otras componentes se les agregue el estilo `blur-lg` para que el usuario se enfoque en el modal

## Oportunidades de mejora

A medida que avanzaba me di cuenta que realmente no era necesario tener dos componentes diferentes para la lista de facturas y la lista de notas, lamentablemente al final ya no me alcanzó el tiempo para hacer la refactorización es por esto que una oportunidad de mejora sería refactorizar el código de las listas y crear un componente más general para no tener que reescribir un código casi igual.

Otra oportunidad de mejora sería agregar más información al modal del botón Asignar y mejorar el formato en que se está presentando la información, ya me quedaba muy poco tiempo cuando escribí el modal así que no fue posible mejorar la presentación acá.