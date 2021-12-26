import * as React from 'react';

const clients: { id: number, name: string, image: string }[] = [
	{ id: 1, name: 'CrazeEnvironmental', image: '' },
	{ id: 2, name: 'Agroelikia', image: '' },
	{ id: 3, name: 'HubStack', image: '' },
	{ id: 4, name: 'EcoMoja', image: '' },
];

const ClientList = () => <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-4 text-2xl text-gray-700">
	{clients.map(client => <a href="#" key={client.id} className="mr-4 overflow-hidden last:mr-0 px-8 md:32 lg:44">{client.name}</a>)}
</div>;

export default ClientList;
