# visual

# Librería de Notificaciones Toast

## Portada

**Tecnológico Nacional de México**
**Instituto Tecnológico de Oaxaca**

**Nombre:** Dalia Montserrat Caballero Silva
**Materia:** Programación Web
**Proyecto:** Librería de componentes visuales en JavaScript
**Componente:** Notificaciones Toast

---

## Nombre del componente

### Notificaciones Toast

Mi componente consiste en una librería de notificaciones tipo **Toast**, creada con HTML, CSS y JavaScript, la cual sirve para mostrar mensajes pequeños en la pantalla durante unos segundos. En este proyecto existen cuatro tipos de notificaciones:

* Éxito
* Error
* Advertencia
* Información

---

## ¿Qué problema resuelve?

En una página web muchas veces es necesario avisarle al usuario si una acción salió bien, ocurrió un error o hay alguna información que debe revisar, una opción sería utilizar `alert()`, pero este detiene la interacción con la página hasta que el usuario cierre la ventana.

Las notificaciones Toast permiten mostrar estos mensajes de una manera más visual y sin interrumpir al usuario, ya que aparecen durante unos segundos y después desaparecen automáticamente.

---

# Instalación

Para utilizar la librería en un proyecto HTML es necesario incluir el archivo CSS y el archivo JavaScript.

## Incluir el CSS

El archivo CSS se agrega dentro del `<head>`:

```html
<link rel="stylesheet" href="css/styles.css">
```

## Incluir el JavaScript

El archivo JavaScript se agrega antes de cerrar la etiqueta `</body>`:

```html
<script src="js/funzioni.js"></script>
```

Después de incluir estos dos archivos, la función `mostrarToast()` ya puede utilizarse dentro del proyecto.

---

# Uso

La función principal del componente es:

```javascript
mostrarToast(mensaje, tipo, duracion);
```

Los datos que recibe son:

* `mensaje`: texto que aparecerá en la notificación.
* `tipo`: estilo de la notificación.
* `duracion`: tiempo que permanecerá visible.

La duración predeterminada es de 3000 milisegundos, es decir, 3 segundos.

---

## Ejemplo de uso en un botón

Se puede llamar a la función desde un botón HTML:

```html
<button onclick="mostrarToast(
    'Operación realizada con éxito',
    'exito'
)">
    Éxito
</button>
```

Al presionar el botón se muestra una notificación de éxito.

---

## Ejemplos de los diferentes tipos de Toast

### Éxito

```javascript
mostrarToast(
    "Operación realizada con éxito",
    "exito"
);
```

### Error

```javascript
mostrarToast(
    "Hay un error",
    "error"
);
```

### Advertencia

```javascript
mostrarToast(
    "Verifica la información proporcionada",
    "advertencia"
);
```

### Información

```javascript
mostrarToast(
    "Nueva notificación",
    "informacion"
);
```

---

## Cambiar la duración

También es posible indicar cuánto tiempo estará visible el Toast.

Por ejemplo, para mostrar una notificación durante 5 segundos:

```javascript
mostrarToast(
    "Este mensaje dura 5 segundos",
    "informacion",
    5000
);
```

JavaScript trabaja el tiempo en milisegundos, por lo que `5000` equivale a 5 segundos.

---

# Capturas de pantalla

## Página principal

<img width="2432" height="1264" alt="image" src="https://github.com/user-attachments/assets/524f65f6-6205-41c0-ad8f-a1aa13c140b2" />


---

## Componente funcionando

### Toast de éxito

<img width="2492" height="1228" alt="image" src="https://github.com/user-attachments/assets/fc2b46aa-0e29-4cb5-acc6-8de00202459f" />

### Toast de error

<img width="2534" height="1236" alt="image" src="https://github.com/user-attachments/assets/c599785e-fd2d-4463-9db1-51e947b92076" />

### Toast de advertencia

<img width="2246" height="1096" alt="image" src="https://github.com/user-attachments/assets/97156289-8aa8-41cc-9264-d32f566a00f5" />

### Toast de información

<img width="2494" height="1132" alt="image" src="https://github.com/user-attachments/assets/cc666424-d4fc-4497-a750-19bec85bc315" />


---

# Video demostrativo

aún no lo hago

---

# Page de GitHub

[aún no lo hago](https://montsecaballero29.github.io/visual/)

---

# Conclusión

Con esta actividad realicé un componente visual reutilizable para mostrar diferentes tipos de notificaciones en una página web, sin tener que interrumpir al usuario, el componente puede usarse en diferentes proyectos simplemente incluyendo el archivo CSS y el archivo JavaScript. Después, se puede llamar a la función `mostrarToast()` indicando el mensaje y el tipo de notificación que se desea mostrar.

