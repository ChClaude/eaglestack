import * as React from 'react';
import Ticker from 'react-ticker';


const clients: { id: number, name: string, image: string }[] = [
  { id: 1, name: 'CrazeEnvironmental', image: '' },
  { id: 2, name: 'Agroelikia', image: '' },
  { id: 3, name: 'HubStack', image: '' },
  { id: 4, name: 'EcoMoja', image: '' },
];

const Client = ({index}: {index: number}) => {
  const [arrayIndex, setArrayIndex] = React.useState(0);

  React.useEffect(() => {
    if (index < clients.length) {
      setArrayIndex(index);
    } else if (index % 4 === 0) {
      setArrayIndex(0);
    } else if (index % 3 === 0) {
      setArrayIndex(3);
    } else if (index % 2 === 0) {
      setArrayIndex(2);
    } else {
      setArrayIndex(1);
    }
  },[]);

  return <div className="px-4">{clients[arrayIndex].name}</div>
};

const ClientListMarquee = () => {
  return <Ticker>
		{({ index }) => (
			<>
				<Client index={index} />
			</>
		)}
  </Ticker>;
};

export default ClientListMarquee;