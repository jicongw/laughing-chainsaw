import { LinksFunction } from "@remix-run/node";
import styles from "./style.css?url";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <div className="testimonial-profile">
        <img
          src="/profile-thumbnail.png"
          alt="Profile"
          className="testimonial-profile-image"
        />
        <div className="testimonial-profile-info">
          <h3 className="testimonial-profile-name">Sarah Dole</h3>
          <p className="testimonial-profile-id">@sarahdole</p>
        </div>
      </div>
      <div className="testimonial-content">
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </div>
    </div>
  );
}
