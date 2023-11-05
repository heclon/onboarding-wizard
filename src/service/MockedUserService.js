let delay = (time) => (result) =>
  new Promise((resolve) => setTimeout(() => resolve(result), time));

/* eslint-disable  sonarjs/no-duplicate-string */

export const MockUserService = {
  getUserData() {
    return [
      {
        id: 1000,
        firstName: "Luke",
        lastName: "Skywalker",
        email: "luke.skywalker@tls.org",
        profile: "Advisor",
        verified: true,
      },
    ];
  },

  getUser() {
    return Promise.resolve(this.getUserData()[0])
      .then(delay(0))
      .catch((error) => console.log(error));
  },
};

export const fetchMockedUser = async () => {
  const user = await MockUserService.getUser();
  console.log("Called fetchMockedUser()");
  return user;
};
/* eslint-disable  sonarjs/no-duplicate-string */
