# Más cadenas de texto

Las cadenas de texto \(strings\) son uno de los tipos de datos más importantes en la programación. En muchas formas se comportan similar a los arreglos \(piensa en una cadena de texto como un arreglo de caracteres\), y a veces es útil convertir de cadenas de texto a arreglos y viceversa. En este capítulo veremos todas las cosas interesantes que podemos hacer con cadenas de texto.

## Obteniendo la longitud de una cadena

Abre la consola de Node.js y escribe `"hola".length`:

```bash
$ node
> "hola".length
4
```

También podemos obtener la longitud de una cadena que está dentro de una variable:

```bash
> let name = "Pedro"
undefined
> name.length
5
```

Ten en cuenta que los espacios también cuentan en la longitud de la cadena:

```bash
> "   ".length
3
```

## Recorriendo cadenas

Puedes obtener los caracteres de una posición específica igual que con los arreglos. Por ejemplo, desde la consola de Node.js:

```bash
$ node
> let str = "Hola Mundo"
undefined
> str[0]
'H'
> str[1]
'o'
> str[2]
`l'
> str[3]
'a'
```

Podemos recorrer por los caracteres de una cadena utilizando un ciclo. Crea un archivo `strings.js` y escribe lo siguiente:

```javascript
let str = "Hola Mundo";

for (let i = 0; i < str.length; i ++) {
  console.log(str[i]);
}
```

## Partiendo cadenas

En ocasiones es útil convertir una cadena en un arreglo. Para eso podemos utilizar el método `split` que nos permite dividir una cadena de diferentes formas. Abre la consola de Node.js y ejecuta lo siguiente:

```bash
$ node
> "Hola mundo".split("")
[ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o' ]
> "Hola mundo".split(" ")
[ 'Hola', 'mundo' ]
```

El método `split` recibe el caracter por el que quieres partir la cadena. Por ejemplo, podemos partir una cadena por comas:

```bash
$ node
> "prueba,separar,cadenas".split(",")
[ 'prueba', 'separar', 'cadenas' ]
```

Si quieres unir un arreglo en una cadena puedes utilizar el método `join`:

```bash
$ node
> ["Hola", "mundo"].join(" ")
'Hola mundo'
```

El método `join` recibe un argumento que es el caracter que se va a utilizar para separar los elementos. Por ejemplo, podemos unir un arreglo con guiones:

```bash
$ node
> ["Hola", "mundo"].join("-")
'Hola-mundo'
```

Si omites el argumento del `join`, los elementos se separan con coma:

```bash
$ node
> ["Hola", "mundo"].join()
'Hola,mundo'
```

## Otros métodos útiles

Sobre las cadenas de texto podemos llamar varios métodos interesantes. Veamos algunos de ellos:

Los métodos `toLowerCase()` y `toUpperCase()` nos permiten convertir una cadena a minúsculas y mayúsculas respectivamente:

```bash
$ node
> "Hola".toLowerCase()
'hola'
> "Hola".toUpperCase()
'HOLA'
```

Los métodos `startsWith()` y `endsWith()` nos permiten saber si una cadena comienza o termina con una subcadena específica. Ten cuidado porque estos métodos tienen en cuenta mayúsculas y minúsculas:

```bash
> "Hola Mundo".startsWith("Hola")
true
> "Hola Mundo".startsWith("Mundo")
false
> "Hola Mundo".endsWith("Mundo")
true
"Hola Mundo".endsWith("Hola")
false
```

También es posible anidar estos métodos. Por ejemplo, para verificar si una cadena comienza con una subcadena específica podemos primero convertir a minúsculas y después si utilizar el `startsWith`:

```bash
> "Hola Mundo".toLowerCase().startsWith("hola")
true
```

Puedes obtener una porción de la cadena con el método `substring` que recibe dos argumentos: el índice desde el cuál se va a retornar la subcadena y, opcionalmente, la posición hasta donde se quiere extraer. Si se omite el segundo argumento se extrae hasta el final de la cadena:

```bash
> "Hola Mundo".substring(0, 3)
'Hola'
> "Bienvenido!".substring(4, 6)
've'
```

**Nota:** Ten cuidado porque también existe un método **obsoleto** `substr`, que se diferencia de `substring` por el segundo argumento. A diferencia de `substring`, `substr` recibe, como segundo argumento, el número de caracteres que se desean extraer. Este método `substr` es obsoleto y se recomienda evitarlo.

Puedes reemplazar un trozo de la cadena por otro con el método `replace`:

```bash
> "Hola Mundo".replace("Mundo", "Germán")
'Hola Germán'
```

Puedes validar si la cadena contiene una subcadena específica con el método `includes`.

```bash
> "Hola Mundo".includes("Hola")
true
```
