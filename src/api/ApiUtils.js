export default {
    getMeasurements: (start_date, end_date) => {
      return fetch(`https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2021-06-18T01%3A32%3A00%2B00%3A00&limit=100&page=1&offset=0&sort=desc&radius=1000&order_by=datetime`)
        .then(res => res.formData.results);
    },
    otherApiCall: (params) => {
    }
  }