import path from "node:path";
import { fileURLToPath } from "node:url";

const CONVENTIONAL_ROUTE_ID = "website:routes";
const RESOLVED_ID= '\0' + CONVENTIONAL_ROUTE_ID;

const { dirname, resolve } = path.posix;
const __dirname = dirname(fileURLToPath(import.meta.url));

const routePaths = ['a','b'];
const generateRoutesCode = () => {
  return `

  ${routePaths
    .map((route, index) => {
      const importPath = resolve(
        __dirname,
        `../src/routes/${route}.jsx`,
      );
      return `import Route${index} from '${importPath}';`;
    })
    .join("\n")}
  export const routes = [
    ${routePaths
      .map((route, index) => {
        return `{ path: '${route}', element: Route${index} }`;
      })
      .join(",\n")}
  ];
  `;
};

export default function pluginRoutes() {
  return {
    name: "website:routes",
    resolveId(id) {
      if (id === CONVENTIONAL_ROUTE_ID) {
        return RESOLVED_ID;
      }
    },

    load(id: string) {
      // FIXME: remove and add it multiple time, and it causes 504
      console.log('load ???');
      if (id === RESOLVED_ID) {
        return generateRoutesCode();
      }
    },
  };
}
