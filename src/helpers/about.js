import { v4 } from "uuid"

import img1 from "../images/about/pencils.svg"
import img2 from "../images/about/lock.svg"
import img3 from "../images/about/technique.svg"

const about = [
  {
    id: v4(),
    image: img1,
    title: "Clean Design",
    description: "Increase sales by showing true dynamics of your website.",
  },
  {
    id: v4(),
    image: img2,
    title: "Secure Data",
    description:
      "Build your online store’s trust using Social Proof & Urgency.",
  },
  {
    id: v4(),
    image: img3,
    title: "Retina Ready",
    description:
      "Realize importance of social proof in customer’s purchase decision.",
  },
]

export default about
