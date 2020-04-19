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
import {
  tableHead,
  tableBody
} from './AdminComponents'

export default function Admin() {
  const [manage, setManage] = useState(false)

  const tableTitles = ['#', 'Username', 'Winrate', 'Chip count', 'Action'];

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
          {tableHead(tableTitles)}
          {tableBody(user, setManage)}
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