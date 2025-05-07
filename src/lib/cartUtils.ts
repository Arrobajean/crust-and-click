import { Product } from '@/lib/data'; // Asegúrate de ajustar este import si tu tipo está en otro archivo

/**
 * Determina si se debe mostrar el selector de corte (sliceOptions).
 * Solo se muestra si hay más de una opción significativa.
 */
export function shouldShowSliceSelector(product: Product): boolean {
  return (
    Array.isArray(product.sliceOptions) &&
    product.sliceOptions.length > 1
  );
}

/**
 * Determina si se debe mostrar el selector de paquete (packageOptions).
 * Solo se muestra si hay opciones definidas.
 */
export function shouldShowPackageSelector(product: Product): boolean {
  return (
    Array.isArray(product.packageOptions) &&
    product.packageOptions.length > 0
  );
}
