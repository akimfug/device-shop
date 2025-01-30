import {DeviceType} from '../devices/devices'
import styles from './device.module.scss'
export const Device: React.FC<DeviceType> = ({id, name, price, rating, img, typeId, brandId}) => {
    // id 
    const imgPath = 'http://localhost:3001/' + img
    return (
        <div className={styles.device}>
            <div className={styles.img_name}>
                <img className={styles.img} src={imgPath}/>
                <div className={styles.name}>{name}</div>
            </div>
            
            <div className={styles.price_stars}>
                <div className={styles.price}>{price} руб.</div>
                <div className={styles.rating}>
                    {rating}
                    <div className={styles.star}></div>
                </div>
            </div>
            
{/*             
            <div className="typeId">{typeId}</div>
            <div className="brandId">{brandId}</div> */}
        </div>
    )
}