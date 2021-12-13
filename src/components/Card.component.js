import "./Card.component.css";
import { useState } from "react";

export default function Card() {
  const [state, setState] = useState(false);

  const toggle = () => {
    setState(!state);
  }

  return (
    <div className="card">
      <div className="card-header">Judul Postingan Blog</div>
      <div className={(state ? 'card-content load-more' : 'card-content')}>
        <p>Once again we stress that this is an inferior implementation and some users will encounter difficulty to use your website, however, it will allow a larger group of people to interact with your website than the alternative of ignoring the rule's warning.</p>
        <p>
          Once again we stress that this is an inferior implementation and some users will encounter difficulty to use your website, however, it will allow a larger group of people to interact with your website than the alternative of ignoring the rule's warning.
        </p>
      </div>
      <div className="card-footer" onClick={toggle}>{(state ? 'Hide' : 'Load More')}</div>
    </div>
  )
}