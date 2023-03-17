// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  guideSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Preparación',
      items: [
        'preparacion/README',
        'preparacion/conceptos-basicos',
        'preparacion/el-editor-de-texto',
        'preparacion/la-linea-de-comandos',
        'preparacion/git-y-github',
      ],
    },
    {
      type: 'category',
      label: 'Git',
      items: [
        'git/README',
        'git/instalacion-configuracion',
        'git/conceptos-comandos-esenciales',
        'git/gitignore',
        { id: 'git/ramas', label: 'Ramas', type: 'doc'  },
        'git/repositorios-remotos',
        { id: 'git/etiquetas', label: 'Etiquetas', type: 'doc'  },
        'git/reescribiendo-la-historia',
        { id: 'git/stashing', label: 'Stashing', type: 'doc'  },
        'git/github',
      ],
    },
    {
      type: 'category',
      label: 'HTML y CSS',
      items: [
        'html-y-css/README',
        'html-y-css/introduccion-a-html',
        'html-y-css/introduccion-a-css',
        'html-y-css/mas-elementos-de-html',
        'html-y-css/tablas',
        'html-y-css/formularios',
        'html-y-css/el-modelo-de-caja-en-css',
        'html-y-css/fondos-backgrounds',
        'html-y-css/posicionamiento',
        'html-y-css/selectores-css',
        'html-y-css/bordes-sombras-y-gradientes',
        'html-y-css/media-queries',
        'html-y-css/unidades',
        'html-y-css/flexbox',
      ],
    },
    {
      type: 'category',
      label: 'JavaScript',
      items: [
        {
          type: 'category',
          label: 'Fundamentos',
          items: [
            { id: 'javascript/README', label: 'Introducción', type: 'doc' },
            'javascript/primeros-pasos',
            'javascript/tipos-y-operadores',
            'javascript/variables',
            'javascript/condicionales',
            'javascript/ciclos',
            'javascript/arreglos',
            'javascript/mas-cadenas-de-texto',
            'javascript/funciones',
            'javascript/objetos-literales',
          ]
        },
        {
          type: 'category',
          label: 'Avanzado',
          items: [
            'javascript/avanzado/prototipos',
            { id: 'javascript/avanzado/librerias-node.js', label: 'Librerías Node.js', type: 'doc' },
            'javascript/avanzado/es6',
            'javascript/avanzado/uso-this',
            'javascript/avanzado/programacion-funcional',
            'javascript/avanzado/scope-hoisting-closures',
            'javascript/avanzado/programacion-asincronica',
            'javascript/avanzado/excepciones',
            'javascript/avanzado/testing',
          ]
        },
        {
          type: 'category',
          label: 'Navegador',
          items: [
            { id: 'javascript/navegador/README', label: 'Introducción', type: 'doc' },
            'javascript/navegador/primeros-pasos',
            'javascript/navegador/manipulando-html',
            'javascript/navegador/escuchando-eventos',
            'javascript/navegador/local-storage',
            'javascript/navegador/history',
            'javascript/navegador/canvas',
            'javascript/navegador/notificaciones',
            'javascript/navegador/video-audio',
            'javascript/navegador/drag-drop',
            'javascript/navegador/json',
            'javascript/navegador/peticiones-http',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'React',
      items: [
        {
          type: 'category',
          label: 'Fundamentos',
          items: [
            { id: 'react/README', label: 'Introducción', type: 'doc' },
            'react/primeros-pasos',
            'react/jsx',
            'react/componentes',
            'react/mas-sobre-estado',
            'react/formularios',
            'react/peticiones-http-con-axios',
            'react/react-hooks',
            'react/react-router',
            'react/estructura-carpetas',
            'react/context',
            'react/carga-de-imagenes',
            'react/react-bootstrap',
            'react/testing',
            'react/componentes-clase',
          ]
        },
        {
          type: 'category',
          label: 'Redux',
          items: [
            { id: 'redux/README', label: 'Introducción', type: 'doc' },
            'redux/primeros-pasos',
            'redux/action-creators',
            'redux/react-redux',
            'redux/middlewares',
            'redux/redux-thunk',
            'redux/combinando-reductoras',
            'redux/redux-tool-kit',
            'redux/testing',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Node.js',
      items: [
        'nodejs/README',
        'nodejs/instalacion',
        'nodejs/manipulacion-de-archivos',
        {
          type: 'category',
          label: 'Express.js',
          items: [
            {
              type: 'category',
              label: 'Fundamentos',
              items: [
                { id: 'nodejs/express/README', label: 'Introducción', type: 'doc' },
                'nodejs/express/primeros-pasos',
                'nodejs/express/el-protocolo-http',
                'nodejs/express/rutas',
                'nodejs/express/vistas',
                'nodejs/express/middlewares-y-manejo-de-errores',
                'nodejs/express/formularios',
                'nodejs/express/cookies-y-sesion',
              ]
            },
            {
              type: 'category',
              label: 'Avanzado',
              items: [
                'nodejs/express/avanzado/web-api',
                'nodejs/express/avanzado/autenticacion',
                'nodejs/express/avanzado/envio-de-correos',
                'nodejs/express/avanzado/carga-de-imagenes',
                'nodejs/express/avanzado/mongoose',
                'nodejs/express/avanzado/testing',
                'nodejs/express/avanzado/deployment',
                'nodejs/express/avanzado/web-sockets',
              ]
            },
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Algoritmos',
      items: [
        { id: 'algoritmos/README', label: 'Introducción', type: 'doc' },
        'algoritmos/describiendo-algoritmos',
        'algoritmos/complejidad',
        'algoritmos/estructuras-de-datos',
        'algoritmos/recursion',
        'algoritmos/ordenamiento',
        'algoritmos/busqueda',
        'algoritmos/programacion-dinamica',
      ],
    },
    {
      type: 'category',
      label: 'Bases de datos',
      items: [
        { id: 'bases-de-datos/README', label: 'Introducción', type: 'doc'},
        'bases-de-datos/bases-de-datos-relacionales',
        'bases-de-datos/sql',
        'bases-de-datos/ddl',
        'bases-de-datos/mongodb',
      ],
    },
    {
      type: 'category',
      label: 'Bootstrap 4',
      items: [
        { id: 'bootstrap-4/README', label: 'Introducción', type: 'doc'},
        'bootstrap-4/primeros-pasos',
        'bootstrap-4/elementos-basicos-de-html',
        'bootstrap-4/componentes',
        'bootstrap-4/la-grilla',
        'bootstrap-4/clases-utilitarias',
        'bootstrap-4/personalizando-bootstrap',
      ],
    },
    {
      type: 'category',
      label: 'Ruby',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Fundamentos',
          items: [
            { id: 'ruby/README', label: 'Introducción', type: 'doc'},
            'ruby/primeros-pasos',
            'ruby/tipos-y-operadores',
            'ruby/variables-y-entrada-de-usuario',
            'ruby/condicionales',
            'ruby/ciclos',
            'ruby/arreglos',
            'ruby/mas-cadenas-de-texto',
            'ruby/hashes',
            'ruby/metodos',
            'ruby/manipulacion-de-archivos',
            'ruby/gemas',
          ]
        },
        {
          type: 'category',
          label: 'Programación Orientada a Objetos',
          items: [
            { id: 'programacion-orientada-a-objetos-en-ruby/README', label: 'Introducción', type: 'doc'},
            'programacion-orientada-a-objetos-en-ruby/clases-y-objetos',
            'programacion-orientada-a-objetos-en-ruby/metodos-y-atributos-de-clase',
            'programacion-orientada-a-objetos-en-ruby/herencia',
            'programacion-orientada-a-objetos-en-ruby/modulos',
            'programacion-orientada-a-objetos-en-ruby/excepciones',
          ]
        },
        {
          type: 'category',
          label: 'HTTP y Sinatra',
          items: [
            { id: 'http-y-sinatra/README', label: 'Introducción', type: 'doc'},
            'http-y-sinatra/primeros-pasos-con-sinatra',
            'http-y-sinatra/el-protocolo-http',
            'http-y-sinatra/rutas',
            'http-y-sinatra/formularios',
            'http-y-sinatra/cookies-y-sesion',
          ]
        },
        {
          type: 'category',
          label: 'Ruby on Rails',
          items: [
            { id: 'ruby-on-rails/README', label: 'Introducción', type: 'doc'},
            'ruby-on-rails/primeros-pasos',
            'ruby-on-rails/arquitectura',
            'ruby-on-rails/rutas',
            'ruby-on-rails/layouts-y-rendering',
            'ruby-on-rails/activerecord-modelos',
            'ruby-on-rails/activerecord-migraciones',
            'ruby-on-rails/activerecord-validaciones',
            'ruby-on-rails/activerecord-asociaciones',
            'ruby-on-rails/activerecord-scopes',
            'ruby-on-rails/activerecord-callbacks',
            'ruby-on-rails/recursos-rest',
            'ruby-on-rails/formularios',
            { id: 'ruby-on-rails/devise', label: 'Autenticación con Devise', type: 'doc'  },
            'ruby-on-rails/sass-y-bootstrap',
            'ruby-on-rails/envio-de-correos',
            'ruby-on-rails/carga-de-imagenes',
            'ruby-on-rails/seeds',
            'ruby-on-rails/heroku',
            {
              id: 'ruby-on-rails/usando-javascript-y-jquery-en-rails',
              label: 'Usando JavaScript en Rails',
              type: 'doc'
            },
            'ruby-on-rails/testing-en-ruby',
            'ruby-on-rails/testing-en-rails',
            'ruby-on-rails/creando-una-web-api',
            'ruby-on-rails/web-sockets',
          ]
        },
      ],
    },
    {
      type: 'category',
      label: 'Python',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'Fundamentos',
          items: [
            { id: 'python/README', label: 'Introducción', type: 'doc'},
            'python/primeros-pasos',
            'python/tipos-y-variables',
            'python/funciones',
            'python/control-de-flujo',
            'python/listas',
            'python/ciclos',
            'python/diccionarios-tuplas-y-sets',
          ],
        },
        {
          type: 'category',
          label: 'NumPy',
          items: [
            { id: 'numpy/README', label: 'Introducción', type: 'doc'},
            'numpy/primeros-pasos',
            'numpy/arreglos',
            'numpy/arreglos-multidimensionales',
            'numpy/estadistica-con-numpy',
            'numpy/distribucion-estadistica',
          ],
        },
        {
          type: 'category',
          label: 'Pandas',
          items: [
            { id: 'pandas/README', label: 'Introducción', type: 'doc'},
            'pandas/primeros-pasos',
            'pandas/inspeccion-y-seleccion-de-datos',
            'pandas/modificando-dataframes',
            'pandas/la-funcion-lambda',
            'pandas/aggregates-en-pandas',
            'pandas/multiples-tablas',
          ],
        },
      ],
    }
  ],
};

module.exports = sidebars;
