import React, { useState } from "react";
import { toast } from 'react-hot-toast';


function Chair({
  szekAdatok,
  setValasztottDB,
  setValasztottHelyek,
}) {
  const [valasztott, setValasztott] = useState(false);

  // if(szekAdatok.type === "foglalt"){
  //  setDisabled(true)
  // }

  console.log(szekAdatok)

  const handleClick = () => {

    if (szekAdatok.type === "empty") {
      setValasztott(!valasztott);
      if (valasztott) {
        toast.error(`${szekAdatok.location}. számú hely kiválasztása törölve!`);
        setValasztottDB((e) => e - 1);
        setValasztottHelyek((regi) =>
          regi.filter(
            (valasztottHelyek) => valasztottHelyek.valasztottSzekHelye !== szekAdatok.location
          )
        );

      } else {
        toast.success(`${szekAdatok.location}. számú hely kiválasztva!`);
        setValasztottDB((e) => e + 1);
        setValasztottHelyek((regi) => [...regi, { valasztottSzekId: szekAdatok.id, valasztottSzekHelye: szekAdatok.location }]);
      }
    } else {

    }
  };

  return (
    <>

      {szekAdatok.type === "foglalt" ?
        <div className="chair-box">
          <i
            onClick={() => toast.error(`Ez a szék már foglalva!`)}
            className="fa-solid fa-couch foglalt"></i>
        </div>
        :
        <div className="chair-box">
          <i
            onClick={handleClick}
            className={
              valasztott ? "fa-solid fa-couch selected" : "fa-solid fa-couch"
            }
          ></i>
        </div>
      }


    </>
  );
}

export default Chair;
