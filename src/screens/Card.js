import React from 'react';
import {
  Box, Heading, Text, Image, Paragraph, Button,
} from 'grommet';
import { Bitcoin, Close, Edit, Add } from 'grommet-icons';
import { Card, ImageStamp } from 'grommet-controls';
import doc from 'grommet-controls/components/Card/doc';
import Doc from '../components/Doc';

const desc = doc(Card).toJSON();

const actions = [
  {
    label: 'Edit',
    icon: <Edit />,
    onClick: () => {},
  }, {
    label: 'New',
    icon: <Add />,
    onClick: () => {},
  },
];
export default class CardDoc extends React.Component {
  state = {
    flipped: false, flippedInitial: true, flippedOnFlip: false,
  };

  render() {
    const { flipped, flippedInitial, flippedOnFlip } = this.state;
    return (
      <Box>
        <Doc
          name='Card'
          desc={desc}
          example={(
            <Box>
              <Card
                backContent={(
                  <Paragraph>
  Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
  error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
  tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
  nonumes adipiscing, suas vivendo epicurei eos no. Novum tractatos sapientem est ut, justo epicurei
  eos te, est cu magna mundi labore. Quo ei aeterno percipitur, quot oporteat perfecto duo eu.
  Vis atomorum voluptaria ut, quo vocent persius detraxit ex, an dicit splendide dissentias eos. Ius
  id quas iracundia conclusionemque, aperiri habemus adversarium te vis, suas appellantur ex sit.
  Mea euismod pericula ea, ius suscipit apeirian torquatos id, mel choro accusamus no. Vix eu
  voluptua luptatum scripserit, et est posse minim timeam. Ludus timeam laboramus ea eos. Vero
  persius vix ex, in sed liber dignissim, ex nemore molestie sea. Pri exerci prompta verterem ne,
  fabulas apeirian disputando has at. At sed bonorum referrentur, solet legere abhorreant mea te,
  ei feugait verterem percipitur his. Ne iisque docendi has, qui similique sententiae ad.
                  </Paragraph>
                )}
              >
                <Card.CardTitle border='bottom'>
                  <ImageStamp round='full' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' />
                  <Heading level={3} margin='xsmall'>Info card</Heading>
                </Card.CardTitle>
                <Card.CardSubTitle>
                  <Bitcoin color='plain' />
                  <Text>sub-title info</Text>
                </Card.CardSubTitle>
                <Card.CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </Card.CardContent>
                <Card.CardActions justify='center'>
                  {actions.map((action, index) => (<Button key={`actions_${index}`} label={action.label} onClick={action.onClick} />))}
                </Card.CardActions>

              </Card>
            </Box>
          )}
          examples={{
            animation: (
              <Card
                animation={{
                  type: 'zoomIn', duration: 5000, size: 'xlarge',
                }}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle border='bottom' strong={false}>
                  sub-title
                </Card.CardSubTitle>
                <Card.CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </Card.CardContent>
              </Card>
            ),
            background: (
              <Card
                background='accent-1'
                size={{
                  width: 'medium', height: 'small',
                }}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle strong={false}>
                  sub-title
                </Card.CardSubTitle>
                Some content
              </Card>
            ),
            border: (
              <Card
                border={{
                  color: 'brand', size: 'medium',
                }}
                size={{
                  width: 'medium', height: 'small',
                }}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle strong={false}>
                  sub-title
                </Card.CardSubTitle>
                Card content
              </Card>
            ),
            elevation: (
              <Card
                elevation='large'
                size={{
                  width: 'medium', height: 'small',
                }}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle strong={false}>
                  sub-title
                </Card.CardSubTitle>
                <Box>
                  Card content
                </Box>
              </Card>
            ),
            flipped: (
              <Card
                flipped={flippedInitial}
                flipOnHover={false}
                backContent={(
                  <Box>
                    <Button
                      onClick={() => {
                        this.setState({
                          flippedInitial: false,
                        });
                      }}
                      icon={<Close />}
                    />
                    <Paragraph>
    Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
    error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
    tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                    </Paragraph>
                  </Box>
                )}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle strong={false}>
                  sub-title
                </Card.CardSubTitle>
                <Card.CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </Card.CardContent>
                <Card.CardActions>
                  <Button
                    label='Flip'
                    onClick={() => {
                      this.setState({
                        flippedInitial: true,
                      });
                    }}
                  />
                </Card.CardActions>

              </Card>
            ),
            flipOnHover: (
              <Card
                flipped={flipped}
                flipOnHover={false}
                backContent={(
                  <Box>
                    <Button
                      onClick={() => {
                        this.setState({
                          flipped: false,
                        });
                      }}
                      icon={<Close />}
                    />
                    <Paragraph>
    Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
    error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
    tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                    </Paragraph>
                  </Box>
                )}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle strong={false}>
                  sub-title
                </Card.CardSubTitle>
                <Card.CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </Card.CardContent>
                <Card.CardActions>
                  <Button
                    label='Flip'
                    onClick={() => {
                      this.setState({
                        flipped: true,
                      });
                    }}
                  />
                </Card.CardActions>

              </Card>
            ),

            flipDuration: (
              <Card
                flipDuration={1}
                backContent={(
                  <Paragraph>
  Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
  error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
  tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                  </Paragraph>
                )}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle>
                  sub-title
                </Card.CardSubTitle>
                <Card.CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </Card.CardContent>
              </Card>
            ),
            gap: (
              <Card
                gap='medium'
                size={{
                  width: 'medium', height: 'small',
                }}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle>
                  sub-title
                </Card.CardSubTitle>
                Some content
              </Card>
            ),
            onFlip: (
              <Card
                flipped={flippedOnFlip}
                flipOnHover={false}
                onFlip={(isFlipped) => { alert(isFlipped ? 'Flipped' : 'Not flipped'); }}
                backContent={(
                  <Box>
                    <Button
                      onClick={() => {
                        this.setState({
                          flippedOnFlip: false,
                        });
                      }}
                      icon={<Close />}
                    />
                    <Paragraph>
    Lorem ipsum dolor sit amet, ad usu cetero interesset. Ut vix quidam verterem, ex ius lorem dicta
    error, ne meis referrentur vim. Eos purto noluisse adipisci te, verear feugait ad has, usu at
    tollit ponderum disputando. Ei sed diceret interesset, eu convenire omittantur cum. Est no
                    </Paragraph>
                  </Box>
                )}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle strong={false}>
                  sub-title
                </Card.CardSubTitle>
                <Card.CardContent>
                  <Image fit='cover' src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </Card.CardContent>
                <Card.CardActions>
                  <Button
                    label='Flip'
                    onClick={() => {
                      this.setState({
                        flippedOnFlip: true,
                      });
                    }}
                  />
                </Card.CardActions>

              </Card>
            ),
            pad: (
              <Card
                pad='medium'
                size={{
                  width: 'medium', height: 'small',
                }}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle>
                  sub-title
                </Card.CardSubTitle>
                <Card.CardContent>
                  Card content
                </Card.CardContent>
              </Card>
            ),
            round: (
              <Card
                round='medium'
                size={{
                  width: 'medium', height: 'small',
                }}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle>
                  sub-title
                </Card.CardSubTitle>
                <Card.CardContent>
                  Card content
                </Card.CardContent>
              </Card>
            ),

            size: (
              <Card
                size={{
                  height: 'medium', width: 'medium',
                }}
              >
                <Card.CardTitle border='bottom'>
                  Card
                </Card.CardTitle>
                <Card.CardSubTitle strong={false}>
                  sub-title
                </Card.CardSubTitle>
                <Card.CardContent>
                  <Image src='//v2.grommet.io/assets/Wilderpeople_Ricky.jpg' height='250' />
                </Card.CardContent>
              </Card>
            ),
          }}
        />
      </Box>
    );
  }
}
