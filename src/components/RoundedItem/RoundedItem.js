import classNames from 'classnames/bind';
import styles from './RoundedItem.module.scss';
const cx = classNames.bind(styles);
function RoundedItem({ avt = false, small = false, big = false, children, onClick, className, ...passProps }) {
    const classes = cx('roundedItem', {
        avt,
        small,
        big,
        [className]: className,
    });
    const props = {
        onClick,
        ...passProps,
    };
    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
}
export default RoundedItem;
