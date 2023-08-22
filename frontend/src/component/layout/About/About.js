import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/kashifraza1208/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dbqbrfp5y/image/upload/v1691580199/avatars/sivql8svhxvakjev8wev.jpg"
              alt="Founder"
            />
            <Typography>Md Kashif Raza</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>HI THERE!</span>
            <span>
              I am Md Kashif Raza FullStack Developer. I have done my graduation
              from National Insituate of Technology Patna in Electronics and
              Communication Engineering. I am a self-taught developer and
              Programmer and I am always looking for new challenges to learn new
              Technologies.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.linkedin.com/in/kashifraza1208/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://www.instagram.com/kashifraza1208/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>

            <a href="https://github.com/Kashifraza1208" target="blank">
              <GitHubIcon className="githubSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
