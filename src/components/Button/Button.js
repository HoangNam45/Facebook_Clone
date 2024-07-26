import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    green = false,
    text = false,
    small = false,
    medium = false,
    large = false,
    children,
    onClick,
    className,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    //Remove event listener when btn disabled
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('button', {
        primary,
        green,
        text,
        medium,
        large,
        small,
        [className]: className,
    });

    return (
        <div className={cx('button_wrap')}>
            <Comp className={classes} {...props}>
                <span>{children}</span>
            </Comp>
        </div>
    );
}
export default Button;
