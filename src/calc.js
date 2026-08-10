const clamp = (n, min, max) => Math.min(max, Math.max(min, n))

const PESO_TENDENCIA = { 'Al alza': 10, Estable: 6, 'A la baja': 2 }

export function analizar(barrio, f) {
  const { precio, m2, gastosCompraPct, reforma, gastosAnuales, mesesVacio, hipoteca, ltv, interes, plazo } = f

  const inversionTotal = precio * (1 + gastosCompraPct / 100) + reforma
  const precioM2Usuario = precio / m2
  const alquilerMensual = m2 * barrio.precioM2Alquiler
  const ingresosAnuales = alquilerMensual * (12 - mesesVacio)
  const netoAnual = ingresosAnuales - gastosAnuales
  const rentBruta = (alquilerMensual * 12) / inversionTotal * 100
  const rentNeta = netoAnual / inversionTotal * 100

  let entrada = inversionTotal
  let cuota = 0
  let capitalPrestado = 0
  if (hipoteca) {
    capitalPrestado = precio * (ltv / 100)
    entrada = inversionTotal - capitalPrestado
    const i = interes / 100 / 12
    const n = plazo * 12
    cuota = i > 0 ? (capitalPrestado * i) / (1 - Math.pow(1 + i, -n)) : capitalPrestado / n
  }
  const cashflowMensual = netoAnual / 12 - cuota
  const roce = entrada > 0 ? (cashflowMensual * 12) / entrada * 100 : 0
  const aniosRecuperar = netoAnual > 0 ? inversionTotal / netoAnual : Infinity

  // Nota de inversión 0-10
  const rentBarrio = (barrio.precioM2Alquiler * 12) / barrio.precioM2Venta * 100
  const ratioRent = rentBruta / rentBarrio
  const sRent = clamp(((ratioRent - 0.7) / 0.6) * 10, 0, 10)
  const diffPct = (precioM2Usuario - barrio.precioM2Venta) / barrio.precioM2Venta * 100
  const sPrecio = clamp(5 - diffPct / 4, 0, 10)
  const sDemanda = barrio.demandaAlquiler
  const sTendencia = PESO_TENDENCIA[barrio.tendencia]
  const nota = clamp(0.4 * sRent + 0.25 * sDemanda + 0.15 * sTendencia + 0.2 * sPrecio, 0, 10)

  return {
    inversionTotal, precioM2Usuario, alquilerMensual, ingresosAnuales, netoAnual, gastosAnuales,
    rentBruta, rentNeta, entrada, cuota, capitalPrestado, cashflowMensual, roce,
    aniosRecuperar, rentBarrio, diffPct, nota,
    veredicto: veredicto(barrio, diffPct, rentNeta, cashflowMensual, hipoteca)
  }
}

function veredicto(barrio, diffPct, rentNeta, cashflow, hipoteca) {
  const precioTxt = Math.abs(diffPct) < 3
    ? `Estás pagando prácticamente el precio medio de ${barrio.nombre}`
    : diffPct > 0
      ? `Estás pagando un ${Math.abs(diffPct).toFixed(0)}% por encima del precio medio del barrio`
      : `Estás comprando un ${Math.abs(diffPct).toFixed(0)}% por debajo del precio medio del barrio`

  const demandaTxt = barrio.demandaAlquiler >= 9
    ? 'la demanda de alquiler es muy alta'
    : barrio.demandaAlquiler >= 7
      ? 'la demanda de alquiler es sólida'
      : 'la demanda de alquiler es moderada'

  const r = rentNeta.toFixed(1).replace('.', ',')
  const rentTxt = rentNeta >= 6
    ? `y la rentabilidad neta del ${r} % es excelente para Madrid`
    : rentNeta >= 4
      ? `y la rentabilidad neta del ${r} % está en la media del mercado`
      : `y la rentabilidad neta del ${r} % se queda corta para el riesgo que asumes`

  const cashTxt = hipoteca
    ? cashflow >= 0
      ? ' El piso se paga solo cada mes con la hipoteca actual.'
      : ' Con esta hipoteca tendrás que poner dinero de tu bolsillo cada mes.'
    : ''

  return `${precioTxt}, ${demandaTxt} ${rentTxt}.${cashTxt}`
}

export const eur = n =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
export const pct = n => `${n.toFixed(1).replace('.', ',')} %`
export const num = n => new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(n)
