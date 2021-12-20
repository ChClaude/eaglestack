import * as React from 'react';
import Ticker from 'react-ticker';


const clients: { id: number, name: string, image: string }[] = [
	{ id: 1, name: 'CrazeEnvironmental', image: '' },
	{ id: 2, name: 'Agroelikia', image: '' },
	{ id: 3, name: 'HubStack', image: '' },
	{ id: 4, name: 'EcoMoja', image: '' },
];

const Client = ({index}: {index: number}) => (<div className='px-4'>{clients[index].name}</div>);

const findNonNullValueIndex = (array: any[]): number =>  {
	let index: number;
	const {length} = array;
	for (index = 0; index < length; index++) {
		if (array[index] !== null) {
			break;
		}
	}

	return index;
};
	
const ClientListMarquee = () => {
	const [clientArray, setClientArray] = React.useState((new Array(clients.length)).fill(null));

	const setCurrentClient = (currentIndex: number): number => {
		let resultValue: number;
		if (currentIndex === 0) {
			const resultArray = [...clientArray];
			resultArray[0] = currentIndex;
			setClientArray(resultArray);
			resultValue = 0;
		} else {
			const size = clientArray.length;
			const resultArray = (new Array(clientArray.length)).fill(null);

			const index = findNonNullValueIndex(clientArray);
			if (index === (size - 1)) {
				resultArray[0] = currentIndex;
				resultValue = 0;
			} else {
				resultArray[index + 1] = currentIndex;
				resultValue = index + 1;
			}

			setClientArray(resultArray);
		}

		return resultValue;
	};

	return <Ticker>
		{({ index }) => {
			const currentIndex = setCurrentClient(index);
			return <>
				<Client index={currentIndex} />
			</>;
		}}
	</Ticker>;
};

export default ClientListMarquee;
