interface ImgWithFallBackProps {
  src: {
    main: string;
    fallback: string;
  }
  type?: string;
  alt: string;
  className?: string;
}

const ImgWithFallBack: React.FC<ImgWithFallBackProps> = ({ src, type = 'image/webp', alt, className }) => {
  return (
    <picture>
      <source className={className} srcSet={src.main} type={type} />
      <img className={className} src={src.fallback} alt={alt} />
    </picture>
  )
}

export default ImgWithFallBack;