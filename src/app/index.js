import React from 'react';

import PlaylistPage from '../components/PlaylistPage';

const App = ({ match: {params} }) => (
  <div className="back">
    <div className="wrapper__">
      <PlaylistPage filter={params.filter || 'No se pasó'}/>
    </div>
  </div>
)

export default App;