import styles from './Image.module.css';
import cn from 'classnames';

interface Props {
    className?: string;
    src: string;
    alt?: string;
}

export default function Image(props: Props) {
    const { src, alt, className } = props;

    return (
        <>
            <img className={cn(styles.image, className)} src={src} alt={alt} />
        </>
    );
}
