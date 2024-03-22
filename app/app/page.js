import Image from "next/image";
import TopNav from "./topnav.js";
import Footer from "./footer.js";

export default function Home() {
  return (
    <main>
      <TopNav />
        <div class="landing-header">
          <Image src="/csta-logo.png" width={250} height={250} className="landing-img" />

          <div className="landing-text-container">
            <h5><hr />MP CSHS</h5>
            <h1>Myers Park, <br />Computer Science</h1>
            <p>
              Welcome to the <span>Myers Park</span> Computer Science Honors Society!. Lorem ipsum dolor sit amet consector i forgot the rest.
            </p>
            <h4>Feel free to reach out about questions, or attend meetings.</h4>
          </div>
        </div>
      <Footer />
    </main>
  );
}