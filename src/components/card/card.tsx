import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.card}>
                <img
                    src="https://plus.unsplash.com/premium_photo-1664037234905-fef616c63fde?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className={styles.image}
                />
                <div className={styles['card-texts']}>
                    <p className={styles['card-title']}>Cardito Title</p>
                    <p className={styles['card-description']}>
                        Such a nice 3D render of orange circles that feels that they are kind of
                        soft.
                    </p>
                </div>
                <button className={styles['card-btn']}>Orange Button</button>
                <button className={styles['blue-btn']}>Blue Button</button>
            </div>
        </div>
    );
};
