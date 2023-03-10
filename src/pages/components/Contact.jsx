import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="bg-third py-20 text-white" id="Contact">
      <div className="flex justify-center flex-wrap flex-col align-middle items-center gap-3 font-poppins max-w-[2600px]">
        <h1 className="text text-4xl">Contact Me</h1>
        <span className="max-sm:w-80 w-">
          Stay connected with David Maisuradze through various social media
          platforms or via traditional email
        </span>
        <div itemScope itemType="http://schema.org/Person">
          <p>
            <span itemProp="name">David Maisuradze</span>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:davitmaisuradze123@gmail.com" itemProp="email">
              davitmaisuradze123@gmail.com
            </a>
          </p>
          <p>
            Phone: <span itemProp="telephone">+995555468282</span>
          </p>
        </div>
        <div className="">
          <a
            href="https://www.linkedin.com/in/dato-maisuradze-882727240/"
            alt="Linkedin icon linking to my Linkedin profile"
          >
            <IconButton aria-label="GitHub" size="medium">
              <LinkedInIcon fontSize="medium" />
              Linkedin
            </IconButton>
          </a>

          <a href="https://github.com/jeefxM">
            <IconButton
              aria-label="GitHub"
              size="medium"
              alt="Github icon linking to my Github profile"
            >
              <GitHubIcon fontSize="medium" />
              Github
            </IconButton>
          </a>

          <a href="https://twitter.com/Maisuradze077">
            <IconButton
              aria-label="twitter"
              size="medium"
              alt="Twitter icon linking to my Twitter profile"
            >
              <TwitterIcon fontSize="medium" />
              Twitter
            </IconButton>
          </a>

          <a href="https://www.facebook.com/jeefx123/">
            <IconButton
              aria-label="facebook"
              size="medium"
              alt="Facebook icon linking to my Facebook profile"
            >
              <FacebookIcon fontSize="medium" />
              Facebook
            </IconButton>
          </a>

          <a
            href="https://www.instagram.com/maisuradze077/"
            alt="Instagram icon linking to my Instagram profile"
          >
            <IconButton aria-label="instagram" size="medium">
              <InstagramIcon fontSize="medium" />
              Instagram
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
