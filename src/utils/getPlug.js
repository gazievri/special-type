import plugCompanie from "../assets/images/plugs/plugCompanie.png";
import plugNews from "../assets/images/plugs/plugNews.png";
import plugPeople from "../assets/images/plugs/plugPeople.png";
import plugPoster from "../assets/images/plugs/plugPoster.png";
import plugRewie from "../assets/images/plugs/plugRewie.png";
import plugSchedule from "../assets/images/plugs/plugSchedule.png";

export const getPlug = (lable) => {
  let plug;
  switch (lable) {
    case "review":
      plug = plugRewie;
      break;
    case "company":
      plug = plugCompanie;
      break;
    case "news":
      plug = plugNews;
      break;
    case "people":
      plug = plugPeople;
      break;
    case "poster":
      plug = plugPoster;
      break;
    case "schedule":
      plug = plugSchedule;
      break;
    default:
      plug = plugPoster;
      break;
  }

  return plug;

};
