import React, { useState } from "react";
import {
  Jumbotron,
  Table,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Row
} from 'reactstrap'
import './Admin.css'

export default function Admin() {
  const [manage, setManage] = useState(false)

  const user = [
    {
      username: 'Calvin',
      winrate: '70%',
      no_of_chips: '500'
    },
    {
      username: 'Habib',
      winrate: '2%',
      no_of_chips: '1'
    },
    {
      username: 'Jerry',
      winrate: '50%',
      no_of_chips: '100'
    },
    {
      username: 'Buford',
      winrate: '100%',
      no_of_chips: '150'
    },
    {
      username: 'Baljeet',
      winrate: '100%',
      no_of_chips: '150'
    }
  ];

  return (
    <div id='admin-page'>
      <Jumbotron>
        <div className='text-center'>
          <h1 className='display-4'>Admin Dashboard</h1>
        </div>
      </Jumbotron>
      <Container>
        <Table size='sm' hover dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>winrate</th>
              <th>Chip count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user && user.length ? (
              user.map((player, index) => (
                <tr>
                  <th scope='row'>{index + 1}</th>
                  <td>{player.username}</td>
                  <td>{player.winrate}</td>
                  <td>{player.no_of_chips}</td>
                  <td>
                    <Button color='danger' onClick={() => setManage(true)}>
                      Manage
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
                <h1>This game is lonely</h1>
              )}
          </tbody>
        </Table>
      </Container>
      <Modal isOpen={manage}
        toggle={() => {
          setManage(!manage)
        }}
      >
        <ModalHeader> Manage user </ModalHeader>
        <ModalBody>
          <Container>
            <Row form>
              Action
              <Input type='select'>
                {['Warn', 'Ban', 'Modify Chips'].map((action) => (
                  <option>{action}</option>
                ))}
              </Input>
            </Row>
            <br />
            <Row form>
              Message
              <Input type="textarea" />
            </Row>
            <br />
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button
            color='danger'
            style={{
              float: 'left'
            }}
            onClick={() => {
              setManage(false);
            }}
          >
            Back
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}