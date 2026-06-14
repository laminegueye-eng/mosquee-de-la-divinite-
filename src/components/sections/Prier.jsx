import { images } from '../../data/content'
import Placeholder from '../ui/Placeholder'

// PRIER — « Les Heures Sacrées » : grille des 5 prières (réf)
const PRAYERS = [
  ['الفجر', 'Fajr', '05:45', images.fajrImg],
  ['الظهر', 'Dhuhr', '13:15', images.jumaaImg],
  ['العصر', 'Asr', '16:40', images.asrImg],
  ['المغرب', 'Maghrib', '19:30', images.maghribImg],
  ['العشاء', 'Isha', '20:45', images.ishaImg],
]

export default function Prier() {
  return (
    <section id="prier" className="section bg-teal">
      <div className="sw">
        <div className="sec-head-center">
          <span className="eyebrow gold">La Communion</span>
          <h2 className="sec-title light">Les Heures <em>Sacrées</em></h2>
        </div>

        <div className="prayers2">
          {PRAYERS.map(([ar, name, time, img]) => (
            <div className="prayer2" key={name}>
              <div className="prayer2-top">
                <p className="prayer2-ar">{ar}</p>
                <p className="prayer2-name">{name}</p>
                <p className="prayer2-time">{time}</p>
              </div>
              <div className="prayer2-photo">
                {img
                  ? <img src={img} alt={name} className="ph" loading="lazy" />
                  : <Placeholder dark />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
