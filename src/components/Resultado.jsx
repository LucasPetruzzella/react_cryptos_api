import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`
const Texto = styled.p`
    font-size: 18px;
    span: {
        font-weight: 700;
    }
`
const Precio = styled.div`
    font-size: 24px;
    span: {
        font-weight: 700;
    }
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Resultado = ({cotizacion}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = cotizacion
  return (
    <Contenedor>
        <img src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen crypto" />
        <div>
    <Precio>El precio es de: <span>{PRICE}</span></Precio>
    <Texto>El precio mas alto del día es: <span>{HIGHDAY}</span></Texto>
    <Texto>El precio mas bajo del día es: <span>{LOWDAY}</span></Texto>
    <Texto>Variación 24hs: <span>{CHANGEPCT24HOUR}</span></Texto>
    <Texto>Actualizado: <span>{LASTUPDATE}</span></Texto>
    </div>
    </Contenedor>
  )
}

export default Resultado