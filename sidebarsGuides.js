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
