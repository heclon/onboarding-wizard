import { useRouteError } from "react-router-dom";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="card relative flex min-h-screen flex-col">
        <div className="relative flex flex-grow">
          <div className="">
            <div id="error" className="grid text-center">
              <div className="col-12 justify-content-center text-3xl font-bold text-blue-500">
                <div>
                  <i
                    className="pi pi-exclamation-circle py-6 text-red-600"
                    style={{ fontSize: "3em" }}
                  />
                </div>
                <div>Investor details not found</div>
              </div>
              <div className="col-12">An unexpected error has occurred.</div>
              <div className="col-12">
                Our team has been notified and will be fixing this issue soon.
              </div>
              <div className="col-12">
                <div
                  className=" cursor-pointer text-sm text-blue-500 hover:font-bold hover:underline"
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(-1);
                  }}
                >
                  <i
                    className={`pi pi-chevron-left text-blue-500`}
                    style={{ fontSize: "0.5em" }}
                  />
                  <span className="pl-1">BACK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
