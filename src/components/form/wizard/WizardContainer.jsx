import { Header } from "./Header.jsx";
import { Divider } from "primereact/divider";

const WizardContainer = ({ children, title, subTitle }) => {
  return (
    <div className="card h-full w-full scale-y-95 p-2 shadow-none md:px-10 lg:h-screen">
      <Header title={title} subTitle={subTitle} />
      <Divider />
      <div className="grid grid-flow-col py-0">
        <div className="col-12">{children}</div>
      </div>
    </div>
  );
};

export default WizardContainer;
