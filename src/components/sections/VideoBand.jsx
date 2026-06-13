import { VIDEO, images } from '../../data/content'

// Bande vidéo aérienne, en lecture automatique, muette et en boucle.
export default function VideoBand() {
  return (
    <section className="videoband">
      <video
        className="videoband-media"
        poster={images.aerial}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
      <span className="videoband-overlay" />
      <div className="videoband-content">
        <span className="ey ey-gold videoband-ey">En vidéo</span>
        <h2 className="h2 h2-lt">La Divinité <em>vue du ciel</em></h2>
        <p className="videoband-text">
          Entre les falaises de Ouakam et l’océan Atlantique, la Mosquée de la Divinité veille
          sur la Corniche-Ouest.
        </p>
      </div>
    </section>
  )
}
