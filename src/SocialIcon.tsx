interface SocialIconProps {
  src: string;
  href: string;
  title: string;
}

export default function SocialIcon({ src, href, title }: SocialIconProps) {
  return (
    <a href={href} target="_blank" title={title}>
      <img src={src} alt={title} style={{ height: 35, width: 35 }} />
    </a>
  );
}
