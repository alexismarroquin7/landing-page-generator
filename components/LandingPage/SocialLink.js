import {
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  Facebook as FacebookIcon
} from '@mui/icons-material';
import styles from "./SocialLink.module.css";

const Icon = ({type}) => {
  const props = {
    fontSize: "inherit"
  }
  switch(type){
    case "instagram":
      return <InstagramIcon {...props}/>
    case "twitter":
      return <TwitterIcon {...props}/>
    case "facebook":
      return <FacebookIcon {...props}/>
    default:
      throw Error('unknown social type', type);
  }
}

export const SocialLink = ({social}) => {
  const { 
    type
  } = social;

  return (
    <div
      className={styles.social_link}
    >
      <Icon 
        type={type}
      />
    </div>
  )
}