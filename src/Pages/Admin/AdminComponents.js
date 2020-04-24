import React from 'react'
import {
  Button
} from 'reactstrap';

export const tableHead = (titles) => (
  <thead>
    <tr>
      {titles.map((title, i) => (
        <th key={i}>{title}</th>
      ))}
    </tr>
  </thead>
)

export const tableBody = (user, setManage, setAction, setMessage, setSelectedUser) => (
  <tbody>
    {user && user.length ? (
      user.map((player, index) => (
        <tr key={index}>
          <th scope='row'>{index + 1}</th>
          <td>{player.player_id}</td>
          <td>{player.no_of_chips}</td>
          <td>{player.no_of_warns}</td>
          <td>{player.banned === '1' ? '❌' : '✔️'}</td>
          <td>
            <Button color='danger' onClick={() => {
              setManage(true)
              setAction('Warn')
              setMessage('')
              setSelectedUser(player.player_id)
            }}>
              Manage
            </Button>
          </td>
        </tr>
      ))
    ) : (
        <></>
      )}
  </tbody>
)