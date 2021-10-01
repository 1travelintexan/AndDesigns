import React from "react";
import familyPic from "../images/AndFamily.jpeg";

function About() {
  return (
    <div className="about-page">
      <h1>Hey guys I'm Ashley!</h1>

      <img className="about-img" src={familyPic} alt="family" />
      <p>
        {" "}
        I was born and raised here in Houston, Texas. I am the oldest of three
        and some may say I'm a little bossy and by that I mean my siblings. Fun
        fact about me, I am also a Christmas baby!!! Yay for my mom, right?
      </p>
      <p>
        I am first a wife and mother... teenage boy mom to be exact. My small
        business started as a hobby making tutu's for my friends little girls
        and has expanded to add so many other things. I am truly grateful to all
        my clients and customers because without them, this side hustle of mine
        would never have been possible. I do hope to one day open up a store.
      </p>
    </div>
  );
}

export default About;
