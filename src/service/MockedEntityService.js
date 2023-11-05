let delay = (time) => (result) =>
  new Promise((resolve) => setTimeout(() => resolve(result), time));

/* eslint-disable  sonarjs/no-duplicate-string */

export const MockEntityService = {
  getEntityData() {
    return [
      {
        name: "BLUE CORPORATION PTY LTD",
        type: "Company",
        abn: 93667529294,
        matchedType: true,
        existsInDB: false,
        userIsOwner: false,
        admins: ["Macks, Simone", "McAuley, John"],
      },
      {
        name: "FOUNDATION FOR THE VICTOR SMORGON INSTITUTE FOR EDUCATION AND RESEARCH AT EPWORTH",
        type: "Corporate Trustee",
        abn: 12345678912,
        matchedType: false,
        existsInDB: false,
        userIsOwner: false,
        admins: ["VICTOR, SMORGON"],
      },
      {
        name: "ABC Trust",
        type: "Partnership",
        abn: 32132132132,
        matchedType: true,
        existsInDB: true,
        userIsOwner: true,
        admins: ["ABC, Owner"],
      },
      {
        name: "Ancillary Trust",
        type: "Ancillary",
        abn: 98798798798,
        matchedType: true,
        existsInDB: false,
        userIsOwner: false,
        admins: ["Ancillary, Owner", "ABC, Owner"],
      },
    ];
  },

  getEntity() {
    return Promise.resolve(this.getEntityData()[0])
      .then(delay(0))
      .catch((error) => console.log(error));
  },
};

export const fetchMockedEntity = async () => {
  const user = await MockEntityService.getEntity();
  console.log("Called fetchMockedEntity()");
  return user;
};
/* eslint-disable  sonarjs/no-duplicate-string */
