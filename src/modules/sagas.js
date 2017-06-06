import { all, fork } from 'redux-saga/effects';
import { watchErrors } from './errors';
import { watchLoadAlbum } from './sections/album';
import { watchLoadArtist } from './sections/artist';
import { watchFetchSongs, watchFetchMoreSongs } from './sections/search/sagas';

export default function* rootSaga() {
  yield all([
    fork(watchErrors),
    fork(watchLoadAlbum),
    fork(watchLoadArtist),
    fork(watchFetchSongs),
    fork(watchFetchMoreSongs),
  ]);
}
