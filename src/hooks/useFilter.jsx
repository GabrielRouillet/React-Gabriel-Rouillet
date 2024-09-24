import { useEffect, useState } from 'react';

export function useFilter(items, propiedad, dato) {
  //lo que vamos a retornar luego de filtrar
  const [itemsFiltrados, setItemsFiltrados] = useState(items);

  useEffect(() => {
    if (dato) {
      const miFiltro = items.filter((item) => item[propiedad] === dato);
      //revisar si se necesita validacion...
      setItemsFiltrados(miFiltro);
    } else {
      setItemsFiltrados(items);
    }
  }, [items, dato]);

  return itemsFiltrados;
}

