# Configura tu llave SSH

## ¿Qué es una llave SSH?

Una llave SSH es un par de llaves pública y privada que se usan para autenticar a los usuarios en los servidores. La llave pública se almacena en el servidor y la llave privada se almacena en el cliente. Cuando el cliente se conecta al servidor, el servidor compara la llave pública con la llave privada para verificar que el cliente es quien dice ser.

## ¿Por qué usar llaves SSH?

Las llaves SSH son más seguras que las contraseñas porque no se pueden descifrar. Si alguien consigue tu contraseña, puede acceder a tu cuenta. Si alguien consigue tu llave privada, no puede acceder a tu cuenta porque no tiene la llave pública.

## Generar una llave SSH

Puede generar una nueva clave SSH en su máquina local. Después de generar la clave, puede agregar la clave a su cuenta en GitHub.com para habilitar la autenticación para las operaciones de Git a través de SSH.

1. Abre la terminal `Git Bash`.
2. Pegue el texto a continuación, sustituyéndolo por su dirección de correo electrónico de GitHub.
  ```bash
  $ ssh-keygen -t ed25519 -C "your_email@example.com"
  ```
3. Esto crea una nueva clave SSH, usando el correo electrónico como una etiqueta.
4. Cuando se le solicite, ingrese una contraseña segura, o presione Enter para dejarla en blanco.
5. Esto agrega su clave SSH a la lista de agentes de tu computadora, para que pueda acceder a ella sin tener que ingresar su contraseña cada vez que inicie sesión en GitHub o GitLab.
  ```bash
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  Agent pid 59566
  $ ssh-add ~/.ssh/id_ed25519
  ```
6. Agregue su clave SSH a la lista de claves conocidas de su cuenta de GitHub.
  ```bash
  $ clip < ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```
7. Vaya a la configuración de su cuenta de GitHub. En la esquina superior derecha de cualquier página, haga clic en su foto de perfil y luego en Configuración.
  ![](https://docs.github.com/assets/cb-139735/mw-1000/images/help/settings/userbar-account-settings.webp)
8. En la sección "Acceso" de la barra lateral, haga clic en Nueva clave SSH o Agregar clave SSH.
  ![](https://docs.github.com/assets/cb-28257/mw-1000/images/help/settings/ssh-add-ssh-key-with-auth.webp)
9. En el campo "Título", agregue una descripción para la nueva clave SSH.
10. Pegue su clave SSH en el campo "Clave".
  ![](https://docs.github.com/assets/cb-47495/mw-1000/images/help/settings/ssh-key-paste-with-type.webp)
11. Haga clic en Agregar clave SSH.
12. Si se le solicita, confirme su contraseña de GitHub.
13. Ahora puede usar su clave SSH para autenticarse en GitHub.
14. Para probar su conexión SSH, puede usar el siguiente comando:
  ```bash
  $ ssh -T git@github.com
  # Attempts to ssh to GitHub
  ```
15. Si ve un mensaje como el siguiente, significa que se ha conectado a GitHub con éxito usando su clave SSH.
  ```bash
  Hi username! You've successfully authenticated, but GitHub does not provide shell access.
  ```

