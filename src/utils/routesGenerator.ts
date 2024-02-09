import { TRoute, TUserpaths } from "../type";

export const routeGenerator = (items: TUserpaths[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        // Corrected 'foreach' to 'forEach'
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
