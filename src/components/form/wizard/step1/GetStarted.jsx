import "primeicons/primeicons.css";

const GetStarted = ({ product, feed, children, isUserLoggedIn }) => {
  console.log("product: ", product);
  console.log("isUserLoggedIn: ", isUserLoggedIn);

  const bgGrayIfLoggedIn = isUserLoggedIn ? "bg-gray-200" : "";

  return (
    <>
      <div className="grid w-full lg:inline-flex lg:h-[470px] lg:grid-flow-col">
        {/*LEFT PANEL => DYNAMIC CONTENT*/}
        <div className="w-full p-3 lg:w-2/3">{feed.step1_get_started}</div>

        {/*GRAY BOX*/}
        <div
          className={`grid rounded-lg ${bgGrayIfLoggedIn} p-2 text-gray-600 lg:w-1/3`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default GetStarted;
