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
<<<<<<< HEAD
<<<<<<< HEAD
} from 'reactstrap';
import './Admin.css';
=======
<<<<<<< HEAD
<<<<<<< HEAD
} from 'reactstrap'
import './Admin.css'
=======
} from 'reactstrap';
import './Admin.css';
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
} from 'reactstrap';
import './Admin.css';
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
} from 'reactstrap';
import './Admin.css';
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
import {
  tableHead,
  tableBody,
  ConfirmationModal
<<<<<<< HEAD
<<<<<<< HEAD
} from './AdminComponents';
import { currentUser, checkValidAdmin } from '../../APIFunctions/user';
=======
<<<<<<< HEAD
<<<<<<< HEAD
} from './AdminComponents'
=======
} from './AdminComponents';
import { currentUser, checkValidAdmin } from '../../APIFunctions/user';
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
} from './AdminComponents';
import { currentUser, checkValidAdmin } from '../../APIFunctions/user';
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
} from './AdminComponents';
import { currentUser, checkValidAdmin } from '../../APIFunctions/user';
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943

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

export default function Admin() {
  let history = useHistory();
  const [manage, setManage] = useState(false)
  const [selectedUser, setSelectedUser] = useState('')
  const [action, setAction] = useState('Warn')
  const [message, setMessage] = useState('')
  const [confirmModal, setConfirmModal] = useState(false)

  const tableTitles = ['#', 'Username', 'Winrate', 'Chip count', 'Action'];

  const confirmProps = {
    open: confirmModal,
    setOpen: setConfirmModal,
    Header: action + ' ' + selectedUser,
    Message: message,
    onClose: () => {
      setConfirmModal(false);
      setManage(false);
    }
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  
  
=======
=======
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943

  let checkAdmin = () => {
    let user = currentUser();
    checkValidAdmin(user, result => {
      if (!result.length) {
        history.push('/')
      }
    })
  }

  checkAdmin();
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943

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
          {tableBody(user, setManage, setSelectedUser)}
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
<<<<<<< HEAD
<<<<<<< HEAD
                {['Warn', 'Ban'].map((action, i) => (
                  <option key={i}>{action}</option>
=======
<<<<<<< HEAD
<<<<<<< HEAD
                {['Warn', 'Ban'].map((action) => (
                  <option>{action}</option>
=======
                {['Warn', 'Ban'].map((action, i) => (
                  <option key={i}>{action}</option>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
                {['Warn', 'Ban'].map((action, i) => (
                  <option key={i}>{action}</option>
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
                {['Warn', 'Ban'].map((action, i) => (
                  <option key={i}>{action}</option>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
                ))}
              </Input>
            </Row>
            <br />
            <Row form>
              Message
              <Input type="textarea" onChange={e => {
                setMessage(e.target.value)
              }
<<<<<<< HEAD
<<<<<<< HEAD
              } />
=======
<<<<<<< HEAD
<<<<<<< HEAD
              }/>
=======
              } />
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
              } />
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
              } />
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
            </Row>
            <br />
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button
            color='danger'
            onClick={() => {
              setManage(false);
            }}
          >
            Back
          </Button>
          <Button
            color='success'
            style={{
              float: 'left'
            }}
            onClick={() => {
              setConfirmModal(true)
            }}
          >
            {action} {selectedUser}
          </Button>
        </ModalFooter>
      </Modal>
      <ConfirmationModal {...confirmProps} />
    </div>
  );
}