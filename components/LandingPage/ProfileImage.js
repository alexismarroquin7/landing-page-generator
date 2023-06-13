import styles from "./ProfileImage.module.css";

export const ProfileImage = ({profile}) => {
  const {
    style
  } = profile;

  return (
    <div
        className={styles.profile_image_container}
      
      >
        <div 
          className={`
            ${styles.profile_image}
            ${styles[`profile_image__border_radius--${style.border_radius}`]}
          `}></div>
      </div>
  )
}