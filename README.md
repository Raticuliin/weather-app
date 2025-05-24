# Conceptos

## useState

Permite agregar estado a los componentes funcionales

```
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

En este ejemplo, contador es una variable de estado que se inicializa en 0. La función setContador se utiliza para actualizar su valor. Cada vez que se hace clic en el botón, el contador aumenta en uno.

## useEffect

Permite realizar efectos secundarios en componentes funcionales, como llamdas a APIs, sucripciones o manipulaciones del DOM.

```
import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Has hecho clic ${contador} veces`;
  }, [contador]);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}
```

En este caso, useEffect actualiza el título del documento cada vez que cambia el valor de contador. El segundo argumento del hook es un array de dependencias; el efecto se ejecutará después de cada renderizado si alguna de las dependencias ha cambiado.

## useRef

Permite acceder directamente a elementos del DOM o para mantener valores persistentes entre renderizados sin causar una nueva renderización.

```
import React, { useRef, useEffect } from 'react';

function Formulario() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo..." />
    </div>
  );
}
```

Aquí, useRef crea una referencia al elemento de entrada. Al montar el componente, useEffect se ejecuta y enfoca automáticamente el campo de texto utilizando inputRef.current.focus().
