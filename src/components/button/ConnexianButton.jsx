export const ConnexianButton = ({
  type = "button",
  label,
  colorScheme,
  onClick,
}) => {
  let className = "";

  if (colorScheme === "white") {
    className =
      "border-2 border-neutral-800 text-neutral-800 bg-white hover:bg-neutral-800 hover:text-white";
  }
  if (colorScheme === "green") {
    className =
      "border-2 border-cnx-green text-white bg-cnx-green hover:border-cnx-dark-green hover:bg-cnx-dark-green";
  }
  if (colorScheme === "blue") {
    className =
      "border-2 border-cnx-blue text-white bg-cnx-blue hover:border-cnx-dark-blue hover:bg-cnx-dark-blue";
  }

  return (
    <button
      type={type}
      className={`w-6rem
                  cursor-pointer
                  justify-center
                  rounded
                  ${className}
                  p-3
                  text-sm
                  font-bold`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
