import styles from "./Button.module.css";

import {
  Phone as PhoneIcon,
  Place as PlaceIcon,
  Email as EmailIcon
} from '@mui/icons-material';

const ButtonIcon = ({type}) => {
  const props = {
    fontSize: "inherit"
  }
  switch(type){
    case "tel":
      return <PhoneIcon {...props} />
    case "address":
      return <PlaceIcon {...props} />
    case "email":
      return <EmailIcon {...props} />
    default:
      throw Error('unkown button type');
  }
}

export const Button = ({ button }) => {
  const {
    text,
    type
  } = button;

  return (
    
    <button
      className={styles.button}
    >
      <span className={styles.button_icon_container}>
        <ButtonIcon type={type} />
      </span>
      <p
        className={styles.text}
      >
        {text}
      </p>
    </button>

  )
}