import React from 'react';

import PlaylistPage from '../components/PlaylistPage';

const App = ({ match: {params} }) => (
      <PlaylistPage filter={params.filter || 'No se pasó'}/>
)

export default App;