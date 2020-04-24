import React from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

<<<<<<< HEAD
<<<<<<< HEAD
export function ConfirmationModal(props) {
=======
<<<<<<< HEAD
<<<<<<< HEAD
export function ConfirmationModal (props) {
=======
export function ConfirmationModal(props) {
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
export function ConfirmationModal(props) {
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
export function ConfirmationModal(props) {
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
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
<<<<<<< HEAD
<<<<<<< HEAD
        <Button color='success'
=======
<<<<<<< HEAD
<<<<<<< HEAD
      <Button color='success'
=======
        <Button color='success'
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
        <Button color='success'
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
        <Button color='success'
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
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
<<<<<<< HEAD
<<<<<<< HEAD
      {titles.map((title, i) => (
        <th key={i}>{title}</th>
=======
<<<<<<< HEAD
<<<<<<< HEAD
      {titles.map(title => (
        <th>{title}</th>
=======
      {titles.map((title, i) => (
        <th key={i}>{title}</th>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
      {titles.map((title, i) => (
        <th key={i}>{title}</th>
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
      {titles.map((title, i) => (
        <th key={i}>{title}</th>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
      ))}
    </tr>
  </thead>
)

export const tableBody = (user, setManage, setSelectedUser) => (
  <tbody>
    {user && user.length ? (
      user.map((player, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
        <tr key={index}>
=======
<<<<<<< HEAD
<<<<<<< HEAD
        <tr>
=======
        <tr key={index}>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
=======
        <tr key={index}>
>>>>>>> f2cdeed... Implemented admin accounts & admin authentication (#51)
>>>>>>> 900e89c... Implemented admin accounts & admin authentication (#51)
=======
        <tr key={index}>
>>>>>>> 57b49bb3dcd3f98a077d519be6ec92ec132e5943
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