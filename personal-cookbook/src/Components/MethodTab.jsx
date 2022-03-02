import { Card, Tab, Col } from 'react-bootstrap'

const MethodTab = () => {
  return (
    <Card.Body>
      <Card.Text className="text-left">
        <Card.Subtitle className="my-2 text-muted">
          Meringue shell:
        </Card.Subtitle>
        <ol>
          <li>Preheat the oven to 140ºC.</li>
          <li>Sieve ground almonds, cocoa powder and icing sugar.</li>
          <li>
            Make a stiff peak meringue with the egg whites and caster sugar.
          </li>
          <li>
            Divide into three and add pink, brown, and yellow food colouring.
          </li>
          <li>
            Add the dry mix over the meringue in 2 inclusions and ‘macaronner’
            the mixture until smooth and shiny.
          </li>
          <li>
            Add the mixture to a piping bag and pipe little macarons of 3 cm of
            diameter on silicone mat or baking paper.
          </li>
          <li>
            Leave to crust for 30 minutes before baking at 140ºC for 12 minutes.
          </li>
        </ol>
        <Card.Subtitle className="my-2 text-muted">
          Chocolate ganache filling:
        </Card.Subtitle>
        <ol>
          <li>
            Bring the cream to the boil and pour over the chopped chocolate.
          </li>
          <li>
            Make an emulsion and add the softened butter. Chill until firm
            before using.
          </li>
        </ol>
        <Card.Subtitle className="my-2 text-muted">
          Hazelnut ganache filling:
        </Card.Subtitle>
        <ol>
          <li>
            Bring the cream to the boil and stir in the hazelnut paste to
            dissolve.
          </li>
          <li>Pour over the chopped chocolate.</li>
          <li>
            Make an emulsion and add the soft butter. Chill until firm before
            using.
          </li>
        </ol>
      </Card.Text>
    </Card.Body>
  )
}
export default MethodTab
