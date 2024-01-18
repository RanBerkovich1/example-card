import classNames from 'classnames';
import styles from './newboard.module.scss';

export interface NewboardProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Newboard = ({ className }: NewboardProps) => {
    return <button className={styles.button}>Button</button>;
};
