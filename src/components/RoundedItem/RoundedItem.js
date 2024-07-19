import classNames from 'classnames/bind';
import styles from './RoundedItem.module.scss';
const cx = classNames.bind(styles);
function RoundedItem({ children }) {
    return <div className={cx('roundedItem')}>{children}</div>;
}

export default RoundedItem;
