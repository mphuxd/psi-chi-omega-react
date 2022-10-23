import { fetchAPI } from "../strapi";

export async function getHomepage() {
  const homepageRes = await fetchAPI("/homepage", {
    populate: {
      "*": { populate: "*" },
      hero: { populate: { image: { fields: ["alternativeText", "width", "height", "url"] } } },
      HeroModern: {
        populate: { images: { fields: ["alternativeText", "width", "height", "url"] } },
      },
      about: { populate: "*" },
      carousel: {
        populate: {
          slide: { populate: { image: { fields: ["alternativeText", "width", "height", "url"] } } },
        },
      },
      cards: {
        populate: {
          card: {
            populate: {
              image: { fields: ["alternativeText", "width", "height", "url"] },
            },
          },
        },
      },
      join: {
        populate: {
          header: { populate: "*" },
          brothers: {
            populate: {
              image: { fields: ["alternativeText", "width", "height", "url"] },
            },
          },
          sisters: {
            populate: {
              image: { fields: ["alternativeText", "width", "height", "url"] },
            },
          },
        },
      },
      community: {
        populate: {
          header: { populate: "*" },
          content: {
            populate: {
              image: { fields: ["alternativeText", "width", "height", "url"] },
            },
          },
        },
      },
      events: { populate: "*" },
    },
  });

  return homepageRes;
}
