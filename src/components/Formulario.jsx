import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import MensajeError from "./MensajeError";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
  }
`;
const Formulario = ({setMonedas}) => {
  const [stateMoneda, SelectMonedas] = useSelectMonedas(
    "Elige tu moneda",
    monedas
  );
  const [arrayCrypto, setArrayCrypto] = useState([]);
  const [error,setError] = useState(false)

  const [stateCryptoMoneda, SelectCryptoMonedas] = useSelectMonedas(
    "Elige tu Crypto Moneda",
    arrayCrypto
  );
  let arrayCryptos = [];
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const response = await fetch(url);
      const responseJson = await response.json();

      arrayCryptos = responseJson.Data.map((moneda) => ({
        text: moneda.CoinInfo.FullName,
        id: moneda.CoinInfo.Name,
      }));

      setArrayCrypto(arrayCryptos);
    };

    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(stateMoneda)
    console.log(stateCryptoMoneda)

    if([stateMoneda,stateCryptoMoneda].includes('')){
        setError(true)
    }else{
        setError(false)
        setMonedas({stateMoneda,stateCryptoMoneda})
    }
  }

  return (
    <>
    {error && (<MensajeError>Todos los campos son obligatorios</MensajeError>)}
    <form
        onSubmit={handleSubmit}
    >
      <SelectMonedas />
      <SelectCryptoMonedas />
      <InputSubmit type="submit" value="Cotizar" />
    </form>
    </>
  );
};

export default Formulario;
