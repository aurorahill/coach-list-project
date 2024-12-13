import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index';
import authModule from './modules/auth/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    auth: authModule,
  },
});

export default store;
