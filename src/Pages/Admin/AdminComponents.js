import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

export function ConfirmationModal(props) {
  const { open,
    setOpen,
    Header,
    Message,
    onClose
  } = props;
  return (
    <Modal isOpen={open}
      toggle={() => {
        setOpen(!open)
      }}>
      <ModalHeader>
        {Header}
      </ModalHeader>
      <ModalBody>
        {Message || 'No message'}
      </ModalBody>
      <ModalFooter>
        <Button color='success'
          onClick={() => {
            onClose();
          }}>
          {Header}
        </Button>
        <Button color='danger'
          onClick={() => {
            setOpen(false);
          }}>
          Back
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export const tableHead = (titles) => (
  <thead>
    <tr>
      {titles.map((title, i) => (
        <th key={i}>{title}</th>
      ))}
    </tr>
  </thead>
)

export const tableBody = (user, setManage, setSelectedUser) => (
  <tbody>
    {user && user.length ? (
      user.map((player, index) => (
        <tr key={index}>
          <th scope='row'>{index + 1}</th>
          <td>{player.username}</td>
          <td>{player.winrate}</td>
          <td>{player.no_of_chips}</td>
          <td>
            <Button color='danger' onClick={() => {
              setManage(true)
              setSelectedUser(player.username)
            }}>
              Manage
            </Button>
          </td>
        </tr>
      ))
    ) : (
        <h1>This game is lonely</h1>
      )}
  </tbody>
)