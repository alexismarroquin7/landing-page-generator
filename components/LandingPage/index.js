"use client";
import { useLandingPage } from "@/hooks";
import { Button } from "./Button";
import styles from "./index.module.css";
import { ProfileImage } from "./ProfileImage";
import { SocialLink } from "./SocialLink";
import { Banner } from "./Banner";

const LandingPage = () => {
  const { state } = useLandingPage();
  return (
    <div
      className={styles.landing_page}
    >
      <Banner/>
      <ProfileImage profile={state.profile}/>
      
      <h1
        className={`
          ${styles.title}
          ${styles[`title__align--${state.title.style.align}`]}
        `}
      >{state.title.text}</h1>
      
      <p
        className={`
          ${styles.description}
          ${styles[`description__align--${state.description.style.align}`]}
        `}
      >{state.description.text}</p>
      
      <div
        className={styles.button_container}
      >
        {state.buttons.map(btn => {
          return (
            <Button key={btn.id} button={btn}/>
          )
        })}
      </div>
      
      <div
        className={styles.social_links_container}
      >
        {state.socials.map(social => {
          return (
            <SocialLink key={social.id} social={social}/>
          )
        })}
      </div>
    
    </div>
  );
};

export default LandingPage;
