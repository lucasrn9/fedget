import bugIcon from "../assets/bug.svg";
import ideaIcon from "../assets/idea.svg";
import thoughtIcon from "../assets/thought.svg";

const feedbacksList = {
  feedbacks: [
    {
      type: "bug",
      image: {
        url: bugIcon,
        alt: "insect cartoon",
      },
      displayText: "Problema",
    },
    {
      type: "idea",
      image: {
        url: ideaIcon,
        alt: "lamp cartoon",
      },
      displayText: "Ideia",
    },
    {
      type: "other",
      image: {
        url: thoughtIcon,
        alt: "speak bubble",
      },
      displayText: "Outro",
    },
  ],
};

export default feedbacksList;
