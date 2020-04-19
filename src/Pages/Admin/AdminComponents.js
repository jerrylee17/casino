import React from 'react'
import {
  Button
} from 'reactstrap'


export const tableHead = (titles) => (
  <thead>
    <tr>
      {titles.map(title => (
        <th>{title}</th>
      ))}
    </tr>
  </thead>
)

export const tableBody = (user, setManage) => (
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
)