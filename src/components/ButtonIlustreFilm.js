import { useState } from 'react';


function ActionLink({img,href}) {

  const [show, setShow] = useState(false)
    function HandleClick (e) {
        e.preventDefault();
        setShow(true);
    }
    return (
      <button className="" href="#" onClick={ (event)=>HandleClick(event)}>
        button of favoris
        {
            show ?
                <img alt='' className='w-40 mx-auto' href={href} src={img}></img>
            :null
        }

      </button>
    );
  }

export default ActionLink;