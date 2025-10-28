# CIT6

/*----- GUIDE FOR CREATING VITE WEBSITE -----*/

/*--- FIRST STEP SHOULD MUST BE DONE ---*/
npm create vite@latest barangay-dashboard -- --template react-ts
cd barangay-dashboard
npm install
npm install -D tailwindcss@3.4.17 postcss autoprefixer 
npx tailwindcss init -p


<tsconfig.app.json must be added the important lines>

{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* --- ADD THESE TWO LINES HERE --- */
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    /* ------------------------------ */

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}



also included the other part 
tsconfig.json
{
  "files": [],
  /* --- ADD THIS BLOCK --- */
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  /* ---------------------- */
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}


/*------- THE FINAL STEPS ---------*/



/* --- SHADCN PACK --- */
npx shadcn@latest add card
use the arrow keys
select default
select nuetral
npm install lucide-react
