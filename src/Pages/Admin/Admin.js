import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
} from 'reactstrap';
import './Admin.css';
import {
  tableHead,
  tableBody
} from './AdminComponents';
import { currentUser, checkValidAdmin, getUsers, warnUser, banUser, unbanUser } from '../../APIFunctions/user';

export default function Admin() {
  let history = useHistory();
  const [manage, setManage] = useState(false)
  const [selectedUser, setSelectedUser] = useState('')
  const [action, setAction] = useState('Warn');
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState('');

  const tableTitles = ['#', 'Username', 'Chip count', 'Warnings', 'Status', 'Action'];

  let handleAction = (user) => {
    if (action === 'Warn') {
      warnUser(user);
      setMessage(user + ' has been warned!');
    }
    else if (action === 'Ban') {
      banUser(user);
      setMessage(user + ' has been banned!');
    }
    else if (action === 'Unban') {
      unbanUser(user);
      setMessage(user + ' has been unbanned!');
    }
  }

  let checkAdmin = () => {
    let user = currentUser();
    checkValidAdmin(user, result => {
      if (!result.length) {
        history.push('/')
      }
    })
  }

  // check if a user is an admin
  checkAdmin();

  // get all users
  getUsers(result => {
    setUsers(result);
  });

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
          {tableBody(users, setManage, setAction, setMessage, setSelectedUser)}
        </Table>
      </Container>
      <Modal isOpen={manage}
        toggle={() => {
          setManage(!manage)
        }}
      >
        <ModalHeader> Manage {selectedUser} </ModalHeader>
        <ModalBody>
          <Container>
            <Row form>
              Action
              <Input type='select' onChange={e => {
                setAction(e.target.value)
              }}>
                {['Warn', 'Ban', 'Unban'].map((action, i) => (
                  <option key={i} id="action-input">{action}</option>
                ))}
              </Input>
            </Row>
            <br />
            {message !== '' ? <p>{message}</p> : <></>}
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button
            color='danger'
            onClick={() => {
              setManage(false);
              setMessage('');
            }}
          >
            Back
          </Button>
          <Button
            color='success'
            style={{
              float: 'left'
            }}
            onClick={() => { handleAction(selectedUser) }}
          >
            {action} {selectedUser}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}