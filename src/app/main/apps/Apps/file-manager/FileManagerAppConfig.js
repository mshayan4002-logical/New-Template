import React from 'react';

const FileManagerAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/file-manager',
			component: React.lazy(() => import('./FileManagerApp'))
		}
	]
};

export default FileManagerAppConfig;
