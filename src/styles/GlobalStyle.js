import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Ubuntu';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  //Estilos para Grid Area

/*Grid Area First Mobile*/

/*min 640px*/
.contenedor {
grid-template-areas: "header header header"                    
                    "contenido contenido contenido"   
                    "sidebar sidebar sidebar"                 
                    "widget-1 widget-1 widget-1"
                    "widget-2 widget-2 widget-2"
                    "footer footer footer"
;
}


/*min 768px*/
@media screen and (min-width: 768px){
.contenedor{
grid-template-areas:    "header header header"
                        "contenido contenido contenido"
                        "sidebar sidebar sidebar"
                        "widget-1 widget-1 widget-2"
                        "footer footer footer"
;
}    
}

/*min 1024px*/
@media screen and (min-width: 1024px){
.contenedor{
grid-template-areas:    "header header header"
                        "contenido contenido sidebar"
                        "widget-1 widget-2 sidebar"
                        "footer footer footer"
;
}

}

/*min 1280px*/
@media screen and (min-width: 1280px){
.contenedor{
grid-template-areas:    "header header header header"
                        "contenido contenido . sidebar"
                        "widget-1 widget-1 widget-1 sidebar"
                        "widget-2 widget-2 widget-2 sidebar"                        
                        "footer footer footer footer"
;
}

}

/*min 1536px*/
@media screen and (min-width: 1536px){
  .contenedor {
    grid-template-areas:
                          "header header header header"
                          "contenido contenido sidebar"
                          "sidebar widget-1 widget-1 widget-1"
                          "sidebar widget-2 widget-2 widget-2"
                          "footer footer footer footer"
  }
}
`
