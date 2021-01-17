/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, "i");
    output = output.filter((trip) => pattern.test(trip.name));
  }
  if (filters.tags.length > 0) {
    filters.tags.forEach((tag) => {
      output = output.filter((trip) => trip.tags.includes(tag));
    });
  }
  // TODO - filter by duration

  if (filters.duration.from !== 1 || filters.duration.to !== 14) {
    output = output.filter(
      (trip) =>
        trip.days >= filters.duration.from && trip.days <= filters.duration.to
    );
  }

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter((trip) => trip.id === tripId);

  // TODO - filter trips by tripId
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips.filter((trip) => trip.country.code == countryCode);

  // TODO - filter trips by countryCode

  console.log("filtering trips by countryCode:", countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};
