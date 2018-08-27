import restClient from 'shared/lib/rest-client';

export const headers = [
  { name: 'Accept', value: 'application/json' }
];

const get = () => (req, res, next) => {
  return restClient.get(`api.openweathermap.org/data/2.5/weather?q=london&appid=1bb6656597dfa7e018bf0e81d8c60ffd`, headers)
    .then(response => res.json(response.body))
    .catch(err => next(err));
};

export default {
  get
}
