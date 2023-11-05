import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export const ConnexianAnglesRight = ({ className }) => {
  return (
    <FontAwesomeIcon
      icon={faAnglesRight}
      className={`${className} text-md pt-2 text-gray-500`}
    />
  );
};
