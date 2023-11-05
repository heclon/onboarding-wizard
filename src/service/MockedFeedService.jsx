import { ConnexianAnglesRight } from "../components/icon/ConnexianAnglesRight.jsx";
import { ProductImage } from "../components/image/ProductImage.jsx";

/* eslint-disable  sonarjs/no-duplicate-string */

export const MockFeedService = {
  getFeedData() {
    return [
      {
        id: 1000,
        step1_get_started: (
          <div className="grid">
            <div className="grid grid-flow-col">
              <div className="col-6">
                <div className="border-round-sm h-26 p-2 text-center font-bold">
                  <ProductImage productImageUrl="https://assets.website-files.com/5ec34be63b5a0b2b6dcabdf6/5ecf63294752d37851e63886_schroders-logo-p-500.png" />
                </div>
              </div>
              <div className="col-6 align-items-start gap-2 border-l-2 border-gray-300 pb-3 font-bold">
                <div className="border-round-sm align-items-start pl-3 text-start text-gray-500">
                  Powered by
                </div>
                <div className="border-round-sm pb-3 pl-3 text-start font-bold text-gray-600">
                  <ConnexianAnglesRight /> Connexian
                </div>
              </div>
            </div>

            <div className="col-12 gap-2 text-left">
              <div className="px-3 py-5 text-2xl font-bold">
                Step 1: Get Started title. Nullam id turpis semper risus porta
                porttitor.
              </div>
              <div className="flex px-3 py-2 text-sm">
                Mauris blandit tortor et enim tristique, vitae efficitur nisl
                aliquet. Morbi mollis, ligula in volutpat ultricies, risus
                libero accumsan tellus, id ornare quam.Mauris blandit tortor et
                enim tristique, vitae efficitur nisl aliquet.
              </div>
            </div>
          </div>
        ),
        step2_search_abn: (
          <div className="grid">
            <div className="grid grid-flow-col">
              <div className="col-6">
                <div className="border-round-sm h-26 p-1 text-center font-bold">
                  <ProductImage productImageUrl="https://assets.website-files.com/5ec34be63b5a0b2b6dcabdf6/5ecf63294752d37851e63886_schroders-logo-p-500.png" />
                </div>
              </div>
              <div className="col-6 align-items-start gap-2 border-l-2 border-gray-300 pb-3 font-bold">
                <div className="border-round-sm align-items-start pl-3 text-start text-gray-500">
                  Powered by
                </div>
                <div className="border-round-sm pb-3 pl-3 text-start font-bold text-gray-600">
                  <ConnexianAnglesRight /> Connexian
                </div>
              </div>
            </div>

            <div className="col-12 gap-2 text-left">
              <div className="px-3 py-5 text-2xl font-bold">
                Step 2: Search ABN title. Here another dynamic screen with media
                and text
              </div>
              <div className="grid px-3 py-2 text-sm lg:grid-flow-col">
                <div className="flex justify-center p-2">
                  {/*TODO: check if they ask for videos the padding right brakes :/*/}
                  {/*<iframe*/}
                  {/*  src={`https://www.youtube.com/embed/rokGy0huYEA`}*/}
                  {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                  {/*  allowFullScreen*/}
                  {/*  title="Embedded video youtube"*/}
                  {/*/>*/}
                  <ProductImage productImageUrl="https://primefaces.org/cdn/primereact/images/usercard.png" />
                </div>
                <div className="pr-2 pt-2 text-justify lg:w-auto">
                  The responsive media here could be image or a video. Praesent
                  tincidunt non dui vel elementum. In non porta arcu. Maecenas
                  quis turpis scelerisque, eleifend quam eget, elementum urna.
                  <br></br>
                  <br></br>
                  Morbi mollis, ligula in volutpat ultricies, risus libero
                  accumsan tellus, id ornare quam. Mauris blandit tortor et enim
                  tristique, vitae efficitur nisl aliquet.
                </div>
              </div>
            </div>
          </div>
        ),
        step3_abn_results: (
          <div className="grid">
            <div className="grid grid-flow-col">
              <div className="col-6">
                <div className="border-round-sm h-26 p-1 text-center font-bold">
                  <ProductImage productImageUrl="https://assets.website-files.com/5ec34be63b5a0b2b6dcabdf6/5ecf63294752d37851e63886_schroders-logo-p-500.png" />
                </div>
              </div>
              <div className="col-6 align-items-start gap-2 border-l-2 border-gray-300 pb-3 font-bold">
                <div className="border-round-sm align-items-start pl-3 text-start text-gray-500">
                  Powered by
                </div>
                <div className="border-round-sm pb-3 pl-3 text-start font-bold text-gray-600">
                  <ConnexianAnglesRight /> Connexian
                </div>
              </div>
            </div>

            <div className="col-12 gap-2 text-left">
              <div className="px-3 py-5 text-2xl font-bold">
                Step 3: ABN results title. Nullam id turpis semper risus porta
                porttitor.
              </div>
              <div className="flex px-3 text-sm">
                <div className="pr-2">
                  Mauris blandit tortor et enim tristique, vitae efficitur nisl
                  aliquet. Morbi mollis, ligula in volutpat ultricies, risus
                  libero accumsan tellus, id ornare quam.Mauris blandit tortor
                  et enim tristique, vitae efficitur nisl aliquet. Morbi mollis,
                  ligula in volutpat ultricies, risus libero accumsan tellus, id
                  ornare quam. <br></br>
                  <br></br>
                  Mauris blandit tortor et enim tristique, vitae efficitur nisl
                  aliquet. Morbi mollis, ligula in volutpat ultricies, risus
                  libero accumsan tellus, id ornare quam.
                </div>
                <div className="pl-2">
                  Mauris blandit tortor et enim tristique, vitae efficitur nisl
                  aliquet. Morbi mollis, ligula in volutpat ultricies, risus
                  libero accumsan tellus, id ornare quam.Mauris blandit tortor
                  et enim tristique, vitae efficitur nisl aliquet. Morbi mollis,
                  ligula in volutpat ultricies. <br></br>
                  <br></br>
                  Mauris blandit tortor et enim tristique, vitae efficitur nisl
                  aliquet. Morbi mollis, ligula in volutpat ultricies...
                </div>
              </div>
            </div>
          </div>
        ),
        step4_select_role: (
          <div className="grid">
            <div className="grid grid-flow-col">
              <div className="col-6">
                <div className="border-round-sm h-26 p-1 text-center font-bold">
                  <ProductImage productImageUrl="https://assets.website-files.com/5ec34be63b5a0b2b6dcabdf6/5ecf63294752d37851e63886_schroders-logo-p-500.png" />
                </div>
              </div>
              <div className="col-6 align-items-start gap-2 border-l-2 border-gray-300 pb-3 font-bold">
                <div className="border-round-sm align-items-start pl-3 text-start text-gray-500">
                  Powered by
                </div>
                <div className="border-round-sm pb-3 pl-3 text-start font-bold text-gray-600">
                  <ConnexianAnglesRight /> Connexian
                </div>
              </div>
            </div>

            <div className="col-12 gap-2 text-left">
              <div className="px-3 py-5 text-2xl font-bold">
                Step 4: Select Role title. Nullam id turpis semper risus porta.
              </div>
              <div className="grid grid-flow-row text-sm lg:flex">
                <div className="pt-2 lg:p-2">
                  <b>Financial Adviser</b>
                  <br />
                  Mauris blandit tortor et enim tristique, vitae efficitur nisl
                  aliquet. Morbi mollis, ligula in volutpat ultricies, risus
                  libero accumsan tellus, id ornare quam.
                </div>
                {/*<div className="pt-2 lg:px-2">*/}
                {/*  <b>Fund Manager</b>*/}
                {/*  <br></br>*/}
                {/*  Vivamus auctor ligula id nisi fermentum, ut volutpat tellus*/}
                {/*  fringilla. Proin massa lectus, vestibulum eget mauris a,*/}
                {/*  vehicula viverra ante.*/}
                {/*</div>*/}
                <div className="pt-2 lg:pr-2">
                  <b>Accountant</b>
                  <br />
                  Aenean placerat ligula ac ante consectetur, sed tincidunt
                  tellus tempor. Fusce id tincidunt nisi. Nulla ut nunc
                  hendrerit, lobortis quam vel, fringilla lacus.
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ];
  },

  getFeed() {
    return Promise.resolve(this.getFeedData()[0])
      .then()
      .catch((error) => console.log(error));
  },
};

export const fetchMockedFeed = async () => {
  const user = await MockFeedService.getFeed();
  console.log("Called fetchMockedFeed()");
  return user;
};
/* eslint_disable  sonarjs/no-duplicate-string */
