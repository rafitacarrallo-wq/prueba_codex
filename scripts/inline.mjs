// Empaqueta el build de Vite en un único HTML autocontenido, sin peticiones externas.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const assets = join('dist', 'assets')
const files = readdirSync(assets)
const read = ext => readFileSync(join(assets, files.find(f => f.endsWith(ext))), 'utf8')

const css = read('.css')
// Un "</script" literal dentro del bundle cerraría la etiqueta antes de tiempo.
const js = read('.js').replace(/<\/script/gi, '<\\/script')

// El viewport va dentro del documento por si el host no lo incluye: sin el, el movil
// renderiza a 980px y encoge toda la pagina.
const html = `<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Radar Inmobiliario Madrid</title>
<style>${css}</style>
<div id="root"></div>
<script type="module">${js}</script>
`

writeFileSync(join('dist', 'radar-inmobiliario-madrid.html'), html)
console.log('dist/radar-inmobiliario-madrid.html', (html.length / 1024).toFixed(0) + ' kB')
