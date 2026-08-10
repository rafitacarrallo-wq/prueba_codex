import { useState, useMemo } from 'react'
import { BarChart, Bar, XAxis, YAxis, Cell, ReferenceLine, ResponsiveContainer, Tooltip } from 'recharts'
import { BARRIOS_MADRID } from './data'
import { analizar, eur, pct, num } from './calc'

const DEFAULTS = {
  gastosCompraPct: 10,
  reforma: 0,
  gastosAnuales: 1500,
  mesesVacio: 1,
  hipoteca: true,
  ltv: 70,
  interes: 3.2,
  plazo: 25
}

const colorNota = n => (n < 5 ? 'var(--rojo)' : n < 7 ? 'var(--ambar)' : 'var(--verde)')

export default function App() {
  const [barrioIdx, setBarrioIdx] = useState(0)
  const [precio, setPrecio] = useState(350000)
  const [m2, setM2] = useState(70)
  const [adv, setAdv] = useState(DEFAULTS)
  const [abierto, setAbierto] = useState(false)
  const [res, setRes] = useState(null)

  const barrio = BARRIOS_MADRID[barrioIdx]
  const setA = (k, v) => setAdv(p => ({ ...p, [k]: v }))

  const valido = precio > 0 && m2 > 0

  const onAnalizar = () => {
    if (!valido) return
    setRes({ barrio, datos: analizar(barrio, { precio: +precio, m2: +m2, ...adv }), hipoteca: adv.hipoteca })
  }

  const chartData = useMemo(() => {
    if (!res) return []
    const b = res.barrio
    const vecinos = BARRIOS_MADRID
      .filter(x => x.nombre !== b.nombre)
      .sort((x, y) => Math.abs(x.precioM2Venta - b.precioM2Venta) - Math.abs(y.precioM2Venta - b.precioM2Venta))
      .slice(0, 5)
    return [...vecinos, b]
      .sort((x, y) => x.precioM2Venta - y.precioM2Venta)
      .map(x => ({ nombre: x.nombre, valor: x.precioM2Venta, sel: x.nombre === b.nombre }))
  }, [res])

  return (
    <div className="wrap">
      <header className="head">
        <h1>Radar Inmobiliario <span className="acc">Madrid</span></h1>
        <p>Analiza si un piso en Madrid es una buena inversión antes de firmar nada.</p>
      </header>

      <section className="card form">
        <div className="row3">
          <label>
            <span>Barrio</span>
            <select value={barrioIdx} onChange={e => setBarrioIdx(+e.target.value)}>
              {BARRIOS_MADRID.map((b, i) => (
                <option key={b.nombre} value={i}>{b.nombre} · {b.distrito}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Precio de compra (€)</span>
            <input type="number" min="0" step="1000" value={precio} onChange={e => setPrecio(e.target.value)} />
          </label>
          <label>
            <span>Superficie (m²)</span>
            <input type="number" min="1" step="1" value={m2} onChange={e => setM2(e.target.value)} />
          </label>
        </div>

        <button className="toggle" onClick={() => setAbierto(a => !a)} aria-expanded={abierto}>
          {abierto ? '−' : '+'} Opciones avanzadas
        </button>

        {abierto && (
          <div className="adv">
            <div className="rowN">
              <label>
                <span>Gastos de compra (%)</span>
                <input type="number" step="0.5" value={adv.gastosCompraPct} onChange={e => setA('gastosCompraPct', +e.target.value)} />
                <small>ITP + notaría + registro</small>
              </label>
              <label>
                <span>Reforma (€)</span>
                <input type="number" step="1000" value={adv.reforma} onChange={e => setA('reforma', +e.target.value)} />
              </label>
              <label>
                <span>Gastos anuales (€)</span>
                <input type="number" step="100" value={adv.gastosAnuales} onChange={e => setA('gastosAnuales', +e.target.value)} />
                <small>IBI, comunidad, seguro, mantenimiento</small>
              </label>
              <label>
                <span>Meses vacío al año</span>
                <input type="number" min="0" max="11" step="1" value={adv.mesesVacio} onChange={e => setA('mesesVacio', +e.target.value)} />
              </label>
            </div>

            <label className="switch">
              <input type="checkbox" checked={adv.hipoteca} onChange={e => setA('hipoteca', e.target.checked)} />
              <span>Hipoteca</span>
            </label>

            {adv.hipoteca && (
              <div className="rowN">
                <label>
                  <span>LTV (%)</span>
                  <input type="number" step="5" value={adv.ltv} onChange={e => setA('ltv', +e.target.value)} />
                </label>
                <label>
                  <span>Interés (%)</span>
                  <input type="number" step="0.1" value={adv.interes} onChange={e => setA('interes', +e.target.value)} />
                </label>
                <label>
                  <span>Plazo (años)</span>
                  <input type="number" step="1" value={adv.plazo} onChange={e => setA('plazo', +e.target.value)} />
                </label>
              </div>
            )}
          </div>
        )}

        <button className="cta" onClick={onAnalizar} disabled={!valido}>Analizar</button>
      </section>

      {res && <Resultado res={res} chartData={chartData} />}

      <footer className="foot">
        Datos de mercado orientativos correspondientes a 2025. Las medias por barrio son estimaciones y no
        sustituyen a una tasación ni a un asesoramiento profesional. Verifica siempre los precios reales antes de invertir.
      </footer>
    </div>
  )
}

function Resultado({ res, chartData }) {
  const { barrio, datos: d, hipoteca } = res
  const diffPos = d.diffPct > 0

  return (
    <>
      <section className="destacados">
        <Big label="Rentabilidad neta" valor={pct(d.rentNeta)} />
        {hipoteca
          ? <Big label="Cashflow mensual" valor={eur(d.cashflowMensual)} color={d.cashflowMensual >= 0 ? 'var(--verde)' : 'var(--rojo)'} />
          : <Big label="Beneficio mensual" valor={eur(d.netoAnual / 12)} color={d.netoAnual >= 0 ? 'var(--verde)' : 'var(--rojo)'} />}
        <Big label="Nota de inversión" valor={d.nota.toFixed(1).replace('.', ',')} color={colorNota(d.nota)} sufijo="/10" />
      </section>

      <div className="bloques">
        <section className="card">
          <h2>Informe del barrio</h2>
          <div className="nota" style={{ borderColor: colorNota(d.nota) }}>
            <div className="notaNum" style={{ color: colorNota(d.nota) }}>{d.nota.toFixed(1).replace('.', ',')}</div>
            <div className="notaTxt">
              <strong>Nota de inversión</strong>
              <span>{barrio.nombre} · {barrio.distrito}</span>
            </div>
          </div>

          <p className="veredicto">{d.veredicto}</p>

          <div className="grid2">
            <Mini label="Precio medio del barrio" valor={`${num(barrio.precioM2Venta)} €/m²`} />
            <Mini label="Tu precio" valor={`${num(Math.round(d.precioM2Usuario))} €/m²`} />
            <Mini
              label="Diferencia sobre la media"
              valor={`${diffPos ? '+' : ''}${d.diffPct.toFixed(1).replace('.', ',')} %`}
              color={diffPos ? 'var(--rojo)' : 'var(--verde)'}
            />
            <Mini label="Tendencia" valor={barrio.tendencia} />
            <Mini label="Metro" valor={barrio.metro} peq />
            <Mini label="Perfil de inquilino" valor={barrio.perfilInquilino} peq />
          </div>

          <div className="demanda">
            <div className="demandaTop">
              <span>Demanda de alquiler</span>
              <strong>{barrio.demandaAlquiler}/10</strong>
            </div>
            <div className="barra"><i style={{ width: `${barrio.demandaAlquiler * 10}%` }} /></div>
          </div>

          <p className="fama">{barrio.fama}</p>
        </section>

        <section className="card">
          <h2>Los números</h2>
          <table className="tabla">
            <tbody>
              <Fila l="Inversión total" v={eur(d.inversionTotal)} />
              <Fila l="Alquiler mensual estimado" v={eur(d.alquilerMensual)} />
              <Fila l="Ingresos anuales" v={eur(d.ingresosAnuales)} />
              <Fila l="Gastos anuales" v={`− ${eur(d.gastosAnuales)}`} />
              <Fila l="Rentabilidad bruta" v={pct(d.rentBruta)} />
              <Fila l="Rentabilidad neta" v={pct(d.rentNeta)} destaca />
              {hipoteca && (
                <>
                  <Fila l="Entrada necesaria" v={eur(d.entrada)} />
                  <Fila l="Cuota mensual" v={`− ${eur(d.cuota)}`} />
                  <Fila
                    l="Cashflow mensual"
                    v={eur(d.cashflowMensual)}
                    color={d.cashflowMensual >= 0 ? 'var(--verde)' : 'var(--rojo)'}
                    destaca
                  />
                  <Fila l="Rentabilidad sobre capital (ROCE)" v={pct(d.roce)} />
                </>
              )}
              <Fila
                l="Años para recuperar la inversión"
                v={Number.isFinite(d.aniosRecuperar) ? `${d.aniosRecuperar.toFixed(1).replace('.', ',')} años` : 'No se recupera'}
              />
            </tbody>
          </table>
        </section>
      </div>

      <section className="card">
        <h2>Precio por m² frente a barrios similares</h2>
        <div className="chart">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData} layout="vertical" margin={{ top: 24, right: 24, bottom: 8, left: 0 }}>
              <XAxis type="number" hide domain={[0, 'dataMax']} />
              <YAxis type="category" dataKey="nombre" width={104} tickLine={false} axisLine={false}
                tick={{ fill: '#9fb0c9', fontSize: 12 }} />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,.04)' }}
                contentStyle={{ background: '#0d1730', border: '1px solid #23324f', borderRadius: 10, color: '#e8eef8' }}
                formatter={v => [`${num(v)} €/m²`, 'Precio medio']}
              />
              <ReferenceLine
                x={Math.round(d.precioM2Usuario)}
                stroke="var(--acc)"
                strokeDasharray="4 4"
                label={{ value: 'Tu precio', position: 'top', fill: '#22e3f0', fontSize: 12 }}
              />
              <Bar dataKey="valor" radius={[0, 6, 6, 0]} barSize={20}>
                {chartData.map(e => (
                  <Cell key={e.nombre} fill={e.sel ? '#22e3f0' : '#2c3d5e'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="pie">Línea punteada: tu precio de {num(Math.round(d.precioM2Usuario))} €/m².</p>
      </section>
    </>
  )
}

const Big = ({ label, valor, color, sufijo }) => (
  <div className="card big">
    <span className="bigLabel">{label}</span>
    <strong style={color ? { color } : undefined}>{valor}{sufijo && <em>{sufijo}</em>}</strong>
  </div>
)

const Mini = ({ label, valor, color, peq }) => (
  <div className="mini">
    <span>{label}</span>
    <strong className={peq ? 'peq' : ''} style={color ? { color } : undefined}>{valor}</strong>
  </div>
)

const Fila = ({ l, v, color, destaca }) => (
  <tr className={destaca ? 'destaca' : ''}>
    <td>{l}</td>
    <td style={color ? { color } : undefined}>{v}</td>
  </tr>
)
