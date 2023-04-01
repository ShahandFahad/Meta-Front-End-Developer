function ListItems(props) {
  return (<li key={props.key}>{props.item}</li>);
}

function RenderList(props) {
  return (
    <ul>
      {
      props.list.map((item) => <ListItems key={item} item={item}/>)
      }
    </ul>
  );
}

// Pass list as prop from App.js
// i.e const list = ['IS', 'SF', 'IQSF', '</3'];
// i.e <RenderList list={list} />