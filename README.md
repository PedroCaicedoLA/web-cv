# Web CV

Web CV es un proyecto web de tipo [SPA](https://es.wikipedia.org/wiki/Single-page_application), permite crear una web personal. Este proyecto tiene las siguientes páginas:

- Blog (Lista las entradas y muestra cada entrada en caso de seleccionarse)
- Proyectos (Lista los proyectos y muestra cada proyecto en caso de seleccionarse)
- Acerca de (Página donde se explica el proposito de la web y se muestra información de contacto)
- Versiones (Permite ver la versión actual de Web CV, así como el registro de cambios/changelog)
- Terminos y Condiciones (Página donde se puede describir los terminos de uso de la página o cualquier otra información legal que quieras aclarar)

En procura de facilitar la reutilización del contenido de las entradas(blog), proyecto, versiones y terminos/condiciones se utiliza dicha información en archivos de formato .md (Markdown), que es el mismo formato que utiliza github como primera documentación de los repositorios (README.md).

## Demostración

Ver la web [https://caicedo1089.github.io](https://caicedo1089.github.io) basada en este proyecto.

![Demostración](https://caicedo1089.github.io/img/webcv/demo.gif)

## Instalación

```
git clone https://github.com/caicedo1089/web-cv.git

cd web-cv

npm install
```

## Uso

Asumiendo que se realizó la instalación según el paso anterior.

```

gulp

node server.js
```

Y en la url localhost:3000 al abrirlo en un navegador se debe ver la página por defecto.

Si quieres saber un poco más sobre su uso y funcionamiento lo invitamos a ver el video de youtube:

[Ver video](https://www.youtube.com/watch?v=U5l1_Q73EkI&list=PLIVZy3jI8GHMXVPhvpdy9aThRTD711nAX)

## Créditos
- [Pedro Caicedo](http://pcaicedo.com)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
