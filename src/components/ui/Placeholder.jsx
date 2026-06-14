import { FiImage } from 'react-icons/fi'
import { cx } from '../../utils/helpers'

// Emplacement réservé pour une image à venir (aucune image n'est encore placée).
export default function Placeholder({ className, dark = false, label = 'Image à venir' }) {
  return (
    <div className={cx('ph-box', dark && 'dark', className)}>
      <FiImage />
      <span>{label}</span>
    </div>
  )
}
