import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Bill Buddy",
    img: "https://images.pexels.com/photos/15804651/pexels-photo-15804651/free-photo-of-people-together-on-motorcycle-on-road-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Bill Buddy is a web-based app, so users don't need to install it on their smartphones. It is designed for splitting bills with friends, offering features like multiple payment options, tracking member payments, and real-time collaborative bill editing.",
    demo: "https://drive.google.com/file/d/1Je_u3ATuMeENc0LgUMgmDZxiwx6jd6iU/view?usp=sharing",
  },
  {
    id: 2,
    title: "Book Store",
    img: "https://images.pexels.com/photos/12992476/pexels-photo-12992476.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description:
      "This web-based bookstore app, built with Next.js for educational purposes, allows users to browse, search, and purchase books online, featuring a shopping cart, secure checkout, and user account management.",
    demo: "https://my-app-psi-ashen.vercel.app/",
  },
  {
    id: 3,
    title: "Other",
    img: "https://images.pexels.com/photos/12093488/pexels-photo-12093488.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Yout can find other project on my github.",
    demo: "https://github.com/riefqialviansyah?tab=repositories",
  },
];

function Single({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={`${item.img}`} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.demo} target="blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single key={item.id} item={item} />;
      })}
    </div>
  );
}
