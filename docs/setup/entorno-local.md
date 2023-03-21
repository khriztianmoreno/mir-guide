# Entorno Local

Un entorno local se refiere a un ambiente de desarrollo en una computadora local donde se escribe, prueba y depura el código antes de que se implemente en un entorno de producción en línea. Es decir, es una instalación de un servidor web y otras herramientas de desarrollo de software en una computadora local para permitir el desarrollo.

En un entorno local, los desarrolladores pueden trabajar en su código sin temor a causar problemas en el entorno de producción en línea. Además, pueden probar el software en diferentes configuraciones y escenarios sin afectar a los usuarios finales. También es posible experimentar con nuevas tecnologías y características sin tener que preocuparse por el impacto en el entorno de producción.

## Requisitos

1. [Git](https://git-scm.com/)
2. [Node.js](https://nodejs.org/)
3. [Visual Studio Code](https://code.visualstudio.com/)
4. [Postman](https://www.postman.com/)

## Windows

Estos días la mejor manera de tener un ambiente de desarrollo en Windows es usando [WSL 2](https://learn.microsoft.com/es-es/windows/wsl/install), que genera una instalación de Linux integrada a Windows sin tener que reiniciar. Estos pasos son un poco más complejos pero vale la pena.

Si no quieres usar WSL 2, puedes usar cualquiera de las siguientes alternativas:

### Alternativa 1: Usar un emulador de terminal

Como sabemos que no todos tienen la posibilidad de usar WSL 2, hemos preparado una guía para instalar un emulador de terminal en Windows. Este emulador nos permitirá usar comandos de Linux en Windows.

Para instalar el emulador de terminal, sigue los siguientes pasos:

1. Descarga [Cmder](https://cmder.app/) la versión `Full`(with Git for Windows)
2. Descomprime la carpeta, te recomendamos que la descomprimas en `C:\` para que sea más fácil de encontrar. *__Nota__: Esta ruta no debe ser `C:\Archivos de programa` o `C:\Program Files` ni ningún otro lugar que requiera acceso de administrador para modificar los archivos de configuración.*
3. (opcional) Coloca tus propios archivos ejecutables en la carpeta `%cmder_root%\bin` para inyectarlos en su `PATH`.
4. Abre el archivo `Cmder.exe` y espera a que se abra la terminal.

### Alternativa 2: Usar una máquina virtual con Linux

Si no quieres usar WSL 2 ni un emulador de terminal, puedes usar una máquina virtual con Linux. Para esto, te recomendamos usar [VirtualBox](https://www.virtualbox.org/wiki/Downloads) y [Ubuntu](https://ubuntu.com/download/desktop).

Para instalar Ubuntu en VirtualBox, sigue los siguientes pasos:

1. Descarga [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
2. Descarga [Ubuntu](https://ubuntu.com/download/desktop)
3. Abre VirtualBox y crea una nueva máquina virtual
4. Selecciona la opción `Linux` y la versión `Ubuntu (64-bit)`
5. Selecciona la cantidad de memoria RAM que quieres asignarle a la máquina virtual
6. Selecciona la cantidad de espacio en disco duro que quieres asignarle a la máquina virtual
7. Selecciona la opción `Crear un disco duro virtual ahora`
8. Selecciona la opción `VDI (VirtualBox Disk Image)`
9. Selecciona la opción `Dinámico alocado`
10. Selecciona la cantidad de espacio en disco duro que quieres asignarle a la máquina virtual
11. Selecciona la opción `Crear`
12. Selecciona la opción `Iniciar`
13. Selecciona la opción `Instalar Ubuntu`

### Alternativa 3: Tener un dual boot con Linux en Windows

Si no quieres usar WSL 2, un emulador de terminal ni una máquina virtual, puedes tener un dual boot con Linux en Windows. Para esto, te recomendamos usar [Ubuntu](https://ubuntu.com/download/desktop).

Para instalar Ubuntu en Windows, sigue los siguientes pasos:

1. Descarga [Ubuntu](https://ubuntu.com/download/desktop)
2. Abre el instalador de Ubuntu
3. Selecciona la opción `Instalar Ubuntu`
4. Selecciona la opción `Instalar ahora`
5. Selecciona la opción `Instalar Ubuntu junto a Windows `


## Linux y Mac OS X
Unix es una excelente opción para el desarrollo de software debido a su flexibilidad, estabilidad, seguridad, interoperabilidad, escalabilidad y consistencia. Las características de Unix hacen que sea una plataforma sólida y confiable para el desarrollo de software de cualquier tipo.

Unix es conocido por su capacidad para manejar grandes cargas de trabajo y aplicaciones complejas de manera confiable. Esto lo hace ideal para el desarrollo de software de misión crítica que necesita funcionar sin interrupciones durante largos períodos de tiempo.

Unix también es compatible con una amplia gama de lenguajes de programación y herramientas de desarrollo, lo que lo hace fácilmente interoperable con otras tecnologías y sistemas. Además, Unix es escalable y puede manejar grandes cantidades de datos y aplicaciones complejas.

### Instalación

1. Instalar [Git](https://git-scm.com/download/win)
2. Instalar [Node.js](https://nodejs.org/es/download/)
3. Instalar [Visual Studio Code](https://code.visualstudio.com/download)
4. Instalar [Postman](https://www.postman.com/downloads/)
5. Instalar [MongoDB Compass](https://www.mongodb.com/try/download/compass)


