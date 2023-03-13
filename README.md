# Implementación HU Samsara Rutas

Ejercicio de implementación de Historia de Usuario Transportes Soto:
esta sera la interfaz para transportes soto usando
samsara para el seguimiento de embarques.
# Api TRS (Transport Routes Samsara)
## Table of Contents
1. [Info General](#info-general)
2. [Requerimientos](#requerimientos)
3. [Tecnologias](#tecnologias)
4. [Instalacion](#instalacion)
5. [End Points](#end-points)

### Info General
***
Esta aplicacion esta echa con javaScript con el framework de react y react bootstrap.

### Requerimientos
***
tener instaladas las dependencias existentes en requeriments.txt
### Tecnologias
***
Lenguaje de programación: javascript

Framework: React versión 18.2.0\
Documentación: https://fastapi.tiangolo.com/

Entorno de tiempo: Node.js version 19.6.1
### Instalacion
***
 la instalación.
```
$ git clone <proyecto.git>
$ cd ../path/del/archivo>
$ npm install

```
Usamos el comando git para clonar el repositorio en el servidor. 
```
$ git clone <proyecto.git>
``` 
Usamos cd para entrar al directorio del proyecto.
```
$ cd ../path/del/archivo
``` 
Usamos npm para instalar los módulos necesarios para el proyecto funcioné.
```
$ npm install
``` 
estando en la carpeta del proyecto lo iniciamos con npm start.
```
$ npm start
```
### End Points

### Variables de ambiente

`fetch` este se encuentra en segumiento_embarque.js
`fetch` este se encuentra en index.js


### despliegue

Construir la aplicación: Antes de desplegar la aplicación, debemos construirla. En la carpeta del proyecto, abrimos la terminal y ejecutamos el comando "npm run build". Este comando creará una versión optimizada y compilada de la aplicación en la carpeta "build".

Elegir un servicio de alojamiento: Podemos alojar nuestra aplicación en diferentes servicios, como Heroku, AWS, Netlify, etc. Dependiendo de la elección, el proceso puede variar un poco.

Subir la aplicación: Una vez que tenemos la versión optimizada de la aplicación, podemos subirla al servicio de alojamiento elegido. Normalmente, esto se hace mediante FTP o mediante el uso de herramientas de línea de comandos como Git.

Configurar el servidor web: Una vez que hemos subido la aplicación, debemos configurar el servidor web para que sirva los archivos estáticos. Por ejemplo, si estamos usando Apache, podemos agregar un archivo .htaccess en la carpeta raíz de la aplicación con las siguientes líneas:

RewriteEngine On
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

Esto redirigirá todas las solicitudes al archivo index.html, que es la entrada principal de nuestra aplicación de React.

Configurar las variables de entorno: En producción, es posible que necesitemos configurar algunas variables de entorno, como la URL del servidor API, claves de acceso a servicios externos, etc. Algunos servicios de alojamiento nos permiten configurar estas variables de entorno directamente en su panel de control, mientras que en otros, tendremos que configurarlas manualmente en el servidor.

Probar la aplicación: Finalmente, debemos probar la aplicación para asegurarnos de que todo funciona correctamente. Podemos hacer esto visitando la URL de la aplicación en nuestro navegador y probando todas las funcionalidades de la aplicación.
