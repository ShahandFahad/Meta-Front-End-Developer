
import './App.css';
import Apples from './componenets/Apples';
import Pears from './componenets/Pears';
import Bag from './componenets/Bag';
import Promo from
'./componenets/Promo';
import Example from './componenets/Example';

function App() {
  return (
    <>
    <Bag children={<Apples color="yellow" number="5" kids={
      <Promo heading="Main Heading" promoSubHeading="Sub Heading" />
    } />} />
    <Bag kids={
      <Promo heading="Main Heading" promoSubHeading="Sub Heading" />
    } />

    <Bag children={<Pears friend="Peter" kids={
      <Promo heading="Main Heading" promoSubHeading="Sub Heading" />
    } />} />
    <Bag kids={
      <Promo heading="Main Heading" promoSubHeading="Sub Heading" />
    } />

    <Promo heading="Main Heading" promoSubHeading="Sub Heading" />
    <Example toggleBoolean={!true} />
    </>
  );
}

export default App;
