import React, { useState } from 'react';
import { Accordion, Button, Card, Form, Grid, Icon } from 'semantic-ui-react';

const GlobalFilter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleClick = () => {
    setShowFilter(!showFilter);
  };

  const options = [
    { text: 'Administrador', value: 'Administrador' },
    { text: 'Visualizador', value: 'Visualizador' },
  ];

  return (
    <Accordion as={Card} fluid styled>
      <Accordion.Title active onClick={handleClick}>
        <Icon name='dropdown' />
        Filtro de Datos
      </Accordion.Title>
      <Accordion.Content active={showFilter} animation='fade' duration={500}>
        {/* <Form className={loading ? 'loading' : ''} onSubmit={} noValidate> */}
        <Form noValidate>
          <Grid>
            <Grid.Row columns={4}>
              <Grid.Column>
                <Form.Input
                  label='Fecha Inicio'
                  placeholder='Fecha Inicio'
                  name='fechaInicio'
                  type='text'
                  fluid
                  // value={values.nombre}
                  // error={errors.nombre ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label='Fecha Fin'
                  placeholder='Fecha Fin'
                  name='fechaFin'
                  type='text'
                  fluid
                  // value={values.nombre}
                  // error={errors.nombre ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label='Campo'
                  placeholder='Campo'
                  name='campo'
                  type='text'
                  fluid
                  // value={values.cedula}
                  // error={errors.cedula ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label='Arena'
                  placeholder='Arena'
                  name='arena'
                  type='text'
                  fluid
                  // value={values.telefono}
                  // error={errors.telefono ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
            </Grid.Row>
            {/* </Grid>
          <Grid> */}
            <Grid.Row columns={4}>
              <Grid.Column>
                <Form.Input
                  label='Estación'
                  placeholder='Estación'
                  name='estacion'
                  type='text'
                  fluid
                  // value={values.telefono}
                  // error={errors.telefono ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label='PAD'
                  placeholder='PAD'
                  name='pad'
                  type='text'
                  fluid
                  // value={values.username}
                  // error={errors.username ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label='Estado'
                  placeholder='Estado'
                  name='estado'
                  type='text'
                  fluid
                  // value={values.password}
                  // error={errors.password ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label='Tipo Pozo'
                  placeholder='Tipo Pozo'
                  name='tipoPozo'
                  type='text'
                  fluid
                  // value={values.confirmPassword}
                  // error={errors.confirmPassword ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
            </Grid.Row>
            {/* </Grid>
          <Grid'> */}
            <Grid.Row columns={4}>
              <Grid.Column>
                <Form.Input
                  label='Pozo'
                  placeholder='Pozo'
                  name='pozo'
                  type='text'
                  fluid
                  // value={values.email}
                  // error={errors.email ? true : false}
                  // onChange={onChange}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Select
                  label='Completamiento'
                  placeholder='Completamiento'
                  name='completamiento'
                  options={options}
                  fluid
                  // value={values.perfil}
                  // error={errors.perfil ? true : false}
                  // onChange={onChangeSelect}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* {Object.keys(errors).length > 0 && (
            <Message negative>
              <List bulleted>
                {Object.values(errors).map(value => (
                  <List.Item key={value}>{value}</List.Item>
                ))}
              </List>
            </Message>
          )} */}
          <Button id='registerUserBtn' style={{ display: 'none' }} type='submit' primary>
            Registrar Usuario
          </Button>
        </Form>
      </Accordion.Content>
    </Accordion>
  );
};

export default GlobalFilter;
