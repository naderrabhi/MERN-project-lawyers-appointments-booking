import image01 from "./images/websiteexplain1.jpg";
import image02 from "./images/websiteexplain2.jpg";
import image03 from "./images/websiteexplain3.jpg";

import { BsFillFileEarmarkCheckFill, BsClipboardCheck } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

const icon01 = <BsFillFileEarmarkCheckFill />;
const icon02 = <BsClipboardCheck />;
const icon03 = <FaClipboardList />;

export const data = [
  {
    _id: "1",
    icon: icon01,
    image: image01,
    description:
      "Prenez rendez-vous avec nous différents spécialistes du droit. Leur calendrier  et disponibiltés vous sont directement accessible",
  },
  {
    _id: "2",
    icon: icon02,
    image: image02,
    description:
      "Votre premiere rendez-vous pourra se faire par téléphone, visio-conférence ou en présentiel",
  },
  {
    _id: "3",
    icon: icon03,
    image: image03,
    description:
      "Consultez en ligne le progrés de votre dossier et télécharger la liste des documents à fournir",
  },
];
