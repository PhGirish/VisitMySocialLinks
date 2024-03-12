export default function Socials(props) {
  return (
    <a className="social" href={props.link}>
      {props.icon && <span>{props.icon}</span>}
      {props.social}
    </a>
  );
}
